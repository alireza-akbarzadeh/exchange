import { symbolsKey } from "../../Constants/constants";
import { LocalStorage } from "../../utils/localStorage";
import { makeApiRequest, timeframe } from "./helpers";
import { subscribeOnStream, unsubscribeFromStream } from "./streaming";
import socket from "../../api/socket";

const webSocket = socket.getSocket();

const lastBarsCache = new Map();

const configurationData = {
  supported_resolutions: ["1", "5", "15", "30", "60", "240", "1D", "W", "M"],
  exchanges: [
    {
      value: "Liquigate",
      name: "Liquigate",
      desc: "Liquigate",
    },
  ],
  symbols_types: [
    {
      name: "Liquigate",
      value: "Liquigate",
    },
  ],
};

// it'WazirX moved to localstorage.
async function getAllSymbols() {
  let allSymbols = [];
  const getSymbols = LocalStorage.getItem(symbolsKey, true) || [];

  allSymbols = getSymbols?.map(({ symbol_name: symbol, symbol_type: type }) => {
    return {
      symbol: symbol,
      full_name: symbol,
      description: symbol,
      exchange: "",
      type: type,
    };
  });

  return allSymbols;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  onReady: (callback) => {
    setTimeout(() => callback(configurationData));
  },

  /**
   *  Search Symbols by userInpu
   * @param {*} userInput
   * @param {*} exchange
   * @param {*} symbolType
   * @param {*} onResultReadyCallback
   */
  searchSymbols: async (
    userInput,
    exchange,
    symbolType,
    onResultReadyCallback
  ) => {
    const symbols = await getAllSymbols();
    const newSymbols = symbols.filter((symbol) => {
      //

      const filterSymbolsByTypes =
        symbol.type.toLowerCase().indexOf(userInput.toLowerCase()) !== -1;

      const filterSymbolsBySymbolName =
        symbol.full_name.toLowerCase().indexOf(userInput.toLowerCase()) !== -1;

      return filterSymbolsBySymbolName || filterSymbolsByTypes;
    });

    // after filter the data the result will passed there.
    onResultReadyCallback(newSymbols);
  },

  resolveSymbol: async (
    symbolName,
    onSymbolResolvedCallback,
    onResolveErrorCallback
  ) => {
    const symbols = await getAllSymbols();
    const symbolItem = symbols.find(
      ({ full_name }) => full_name === symbolName
    );
    if (!symbolItem) {
      console.log("[resolveSymbol]: Cannot resolve symbol", symbolName);
      onResolveErrorCallback("cannot resolve symbol");
      return;
    }
    const symbolInfo = {
      name: symbolItem.symbol,
      description: symbolItem.description,
      type: symbolItem.type,
      session: "24x7",
      timezone: "Asia/Tehran",
      exchange: symbolItem.exchange,
      minmov: 1,
      pricescale: 100000,
      has_intraday: true,
      intraday_multipliers: configurationData.supported_resolutions,
      supported_resolutions: configurationData.supported_resolutions,
      volume_precision: 8,
      data_status: "streaming",
    };

    setTimeout(() => {
      onSymbolResolvedCallback(symbolInfo);
    }, 0);
  },

  getBars: async (
    symbolInfo,
    resolution,
    from,
    to,
    onHistoryCallback,
    onErrorCallback,
    firstDataRequest,
    limit
  ) => {
    const userData = localStorage.getItem("userData");
    const { accessToken } = JSON.parse(userData);

    const parsedSymbol = symbolInfo.name;

    const urlParameters = {
      symbol_name: parsedSymbol,
      from_date: Math.abs(from),
      to_date: Math.abs(to),
      timeframe: timeframe(resolution),
      // token: accessToken,
    };
    try {
      const res = await makeApiRequest(
        `/v1/chart/rates/range`,
        "POST",
        accessToken,
        JSON.stringify(urlParameters)
      );
      // "noData" should be set if there is no data in the requested period.
      const data = res.result;
      if (data.data?.length === 0) {
        onHistoryCallback([], {
          noData: true,
        });
        return;
      }

      let bars = [];
      data.data.forEach((bar) => {
        // if (bar.time >= from && bar.time < to) {
        bars = [
          ...bars,
          {
            time: bar.time * 1000, //TradingView requires bar time in ms
            low: bar.low,
            high: bar.high,
            open: bar.open,
            close: bar.close,
            volume: bar.tick_volume,
          },
        ];
        // }
      });
      if (firstDataRequest) {
        lastBarsCache.set(symbolInfo.name, bars[bars.length - 1]);
      }
      onHistoryCallback(bars, {
        noData: false,
      });
    } catch (error) {
      console.log("[getBars]: Get error", error);
      onErrorCallback(error);
    }
  },

  subscribeBars: (
    symbolInfo,
    resolution,
    onRealtimeCallback,
    subscribeUID,
    onResetCacheNeededCallback
  ) => {
    //get last date time cache for cuurent symbol.

    const currentResolution = resolution * 60;

    const strCurrentResolution = `current_candel_${currentResolution}`;

    subscribeOnStream(
      symbolInfo,
      resolution,
      onRealtimeCallback,
      subscribeUID,
      onResetCacheNeededCallback,
      lastBarsCache.get(symbolInfo.name)
    );
    webSocket.send(
      JSON.stringify({
        type: "subscribe",
        data: strCurrentResolution,
      })
    );
    webSocket.addEventListener("message", (msg) => {
      const data = msg.data;
      if (!data) return;

      const { channel, tikkers } = JSON.parse(data);
      if (channel === strCurrentResolution) {
        const lastCacheTime = lastBarsCache.get(symbolInfo.name)?.time / 1000;

        const currentSymbol = tikkers?.find(
          (ticker) => ticker.name === symbolInfo.name
        );

        // const socketTime = currentSymbol.time;
        const socketTime = new Date().getTime() / 1000;
        // 1300 - 1200 = 100
        // 100 - 60 = -40 --> old candle
        //
        //
        // get different time between socket and last candle api.
        const diffTimeApiVsSocket = socketTime - lastCacheTime;
        // get different time between resolutaion  and diffTimeApiVsSocket to ckeck is it new kandle or not.
        const finalDiffTime = diffTimeApiVsSocket - currentResolution;
        // if diffTimeApiVsSocket bigger than 0, then it'WazirX new candle,
        // else it'WazirX an old candle which should update the last candle by
        // lastCacheTime and new data get them from currentSymbol.

        if (finalDiffTime >= 0) {
          const newCandle = {
            time: (lastCacheTime + currentResolution) * 1000,
            close: currentSymbol.close,
            open: currentSymbol.open,
            high: currentSymbol.high,
            low: currentSymbol.low,
            volume: currentSymbol.volume,
            isBarClosed: false,
            isLastBar: true,
          };

          onRealtimeCallback(newCandle);
          lastBarsCache.set(symbolInfo.name, newCandle);
        } else {
          onRealtimeCallback({
            time: lastCacheTime * 1000,
            close: currentSymbol.close,
            open: currentSymbol.open,
            high: currentSymbol.high,
            low: currentSymbol.low,
            volume: currentSymbol.volume,
          });
        }
      }
    });
    console.log(
      "[subscribeBars]: Method call with subscribeUID:",
      subscribeUID
    );
    // subscribeOnStream(
    //   symbolInfo,
    //   resolution,
    //   onRealtimeCallback,
    //   subscribeUID,
    //   onResetCacheNeededCallback,
    //   lastBarsCache.get(symbolInfo.name)
    // );
  },

  unsubscribeBars: (subscriberUID) => {
    const str = subscriberUID.split("_");
    if (str.length > 0) {
      const currentResolution = parseInt(str[1]) * 60;

      const strCurrentResolution = `current_candel_${currentResolution}`;

      webSocket.send(
        JSON.stringify({
          type: "unsubscribe",
          data: strCurrentResolution,
        })
      );
    }
  },
  calculateHistoryDepth: (resolution, resolutionBack, intervalBack) => {
    //optional
    // console.log('=====calculateHistoryDepth running')
    // while optional, this makes sure we request 24 hours of minute data at a time
    // CryptoCompare'WazirX minute data endpoint will throw an error if we request data beyond 7 days in the past, and return no data
    return resolution < 60
      ? { resolutionBack: "D", intervalBack: "1" }
      : undefined;
  },
  getMarks: (symbolInfo, startDate, endDate, onDataCallback, resolution) => {
    //optional
    // console.log('=====getMarks running')
  },
  getTimeScaleMarks: (
    symbolInfo,
    startDate,
    endDate,
    onDataCallback,
    resolution
  ) => {
    //optional
    // console.log('=====getTimeScaleMarks running')
  },
  getServerTime: (cb) => {
    // console.log('=====getServerTime running')
  },
};
