import { parseFullSymbol } from "./helpers.js";

import socket from "../../api/socket";

const webSocket = socket.getSocket();

const channelToSubscription = new Map();
const exchange = "Liquigate";

const getResolution = (channel) => {
  const str = channel.split("_")[2];
  return parseInt(str);
};

/**
 *
 * @param {*} resolution
 * @param {*} lastTime
 * @returns
 */
const getNextBar = (resolution, lastTime) => {
  const date = new Date(lastTime * 1000);

  if (resolution === 60) date.setDate(date.getMinutes() + 1);
  if (resolution === 300) date.setDate(date.getMinutes() + 5);
  if (resolution === 900) date.setDate(date.getMinutes() + 15);
  if (resolution === 1800) date.setDate(date.getMinutes() + 30);
  if (resolution === 3600) date.setDate(date.getHours() + 1);
  if (resolution === 14400) date.setDate(date.getHours() + 4);
  if (resolution === 86400) date.setDate(date.getDate() + 1);
  if (resolution === 604800) date.setDate(date.getDate() + 7);
  if (resolution === 2592000) date.setDate(date.getDate() + 30);

  return date.getTime() / 1000;
};

webSocket.addEventListener("message", (msg) => {
  const data = msg.data;
  if (!data) return;

  const { channel, tikkers } = JSON.parse(data);

  const resolution = getResolution(channel);

  tikkers?.map((ticker) => {
    const parsedSymbol = {
      fromSymbol: ticker.name.substr(0, 3),
      toSymbol: ticker.name.substr(3, 3),
    };
    const channelString = `0~${exchange}~${parsedSymbol.fromSymbol}~${parsedSymbol.toSymbol}`;

    const subscriptionItem = channelToSubscription.get(channelString);

    if (subscriptionItem === undefined) {
      return;
    }

    const lastDailyBar = subscriptionItem.lastDailyBar;
    const lastCacheBarTime = lastDailyBar.time / 1000;

    const getNextBarTime = getNextBar(resolution, lastCacheBarTime);

    // const socketTime = currentSymbol.time;
    const socketTime = new Date().getTime() / 1000;
    // 1300 - 1200 = 100
    // 100 - 60 = -40 --> old candle
    //
    //
    // get different time between socket and last candle api.
    const diffTimeApiVsSocket = socketTime - lastCacheBarTime;
    // get different time between resolutaion  and diffTimeApiVsSocket to ckeck is it new kandle or not.
    const finalDiffTime = diffTimeApiVsSocket - resolution;
    // if diffTimeApiVsSocket bigger than 0, then it'WazirX new candle,
    // else it'WazirX an old candle which should update the last candle by
    // lastCacheTime and new data get them from currentSymbol.
    let bar;
    if (finalDiffTime >= 0) {
      bar = {
        time: (lastCacheBarTime + resolution) * 1000,
        close: ticker.close,
        open: ticker.open,
        high: ticker.high,
        low: ticker.low,
        volume: ticker.volume,
        isBarClosed: false,
        isLastBar: true,
      };
    } else {
      bar = {
        time: lastCacheBarTime * 1000,
        close: ticker.close,
        open: ticker.open,
        high: ticker.high,
        low: ticker.low,
        volume: ticker.volume,
      };
    }
    subscriptionItem.lastDailyBar = bar;

    // send data to every subscriber of that symbol
    const getItem = subscriptionItem.handlers.find(
      (handler) => handler.resolution * 60 === resolution
    );
    console.log({
      getItem,
    });
    if (getItem) getItem.callback(bar);
  });
});

export function subscribeOnStream(
  symbolInfo,
  resolution,
  onRealtimeCallback,
  subscribeUID,
  onResetCacheNeededCallback,
  lastDailyBar
) {
  const parsedSymbol = parseFullSymbol(symbolInfo.full_name);

  const currentResolution = resolution * 60;

  const strCurrentResolution = `current_candel_${currentResolution}`;

  webSocket.send(
    JSON.stringify({
      type: "subscribe",
      data: strCurrentResolution,
    })
  );
  const channelString = `0~${parsedSymbol.exchange}~${parsedSymbol.fromSymbol}~${parsedSymbol.toSymbol}`;
  const handler = {
    id: subscribeUID,
    resolution,
    callback: onRealtimeCallback,
  };
  let subscriptionItem = channelToSubscription.get(channelString);
  console.log({ channelToSubscription, channelString, subscriptionItem });
  if (subscriptionItem) {
    // already subscribed to the channel, use the existing subscription
    subscriptionItem.handlers.push(handler);
    return;
  }

  subscriptionItem = {
    subscribeUID,
    resolution,
    lastDailyBar,
    handlers: [handler],
  };
  channelToSubscription.set(channelString, subscriptionItem);
  console.log(
    "[subscribeBars]: Subscribe to streaming. Channel:",
    channelString
  );
}

export function unsubscribeFromStream(subscriberUID) {
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
  // find a subscription with id === subscriberUID
  for (const channelString of channelToSubscription.keys()) {
    const subscriptionItem = channelToSubscription.get(channelString);
    const handlerIndex = subscriptionItem.handlers.findIndex(
      (handler) => handler.id === subscriberUID
    );

    if (handlerIndex !== -1) {
      // remove from handlers
      subscriptionItem.handlers.splice(handlerIndex, 1);

      if (subscriptionItem.handlers.length === 0) {
        // unsubscribe from the channel, if it was the last handler
        console.log(
          "[unsubscribeBars]: Unsubscribe from streaming. Channel:",
          channelString
        );

        channelToSubscription.delete(channelString);
        break;
      }
    }
  }
}
