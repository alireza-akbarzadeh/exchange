import React, { useEffect, useState } from "react";
import "./index.css";
import Datafeed from "./datafeed";
import { TIME_FRAMES } from "../../Constants/constants";

function getLanguageFromURL() {
  const regex = new RegExp("[\\?&]lang=([^&#]*)");
  const results = regex.exec(window.location.search);
  return results === null
    ? null
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function TVChartContainer({
  symbol,
  interval,
  containerId,
  libraryPath,
  chartsStorageUrl,
  chartsStorageApiVersion,
  clientId,
  userId,
  fullscreen,
  autosize,
  studiesOverrides,
  theme,
  timezone,
}) {
  const [state, setstate] = useState("");

  const {
    widget,
  } = require(`../../../public/lib/charting_library/charting_library.min`);

  useEffect(() => {
    const widgetOptions = {
      debug: false,
      symbol: symbol,
      datafeed: Datafeed,
      height: "100%",
      width: "100%",
      interval: interval,
      container_id: containerId,
      library_path: libraryPath,
      locale: getLanguageFromURL() || "en",
      disabled_features: ["hide_left_toolbar_by_default", "study_templates"],
      enabled_features: ["use_localstorage_for_settings"],
      disabledDrawings: false,
      charts_storage_url: chartsStorageUrl,
      charts_storage_api_version: chartsStorageApiVersion,
      client_id: containerId,
      user_id: containerId,
      fullscreen: fullscreen,
      time_frames: TIME_FRAMES,
      autosize: autosize,
      theme: theme,
      timezone: timezone,
      studies_overrides: studiesOverrides,
      overrides: {
        "mainSeriesProperties.showCountdown": false,
      },
    };
    const tvWidget = new widget(widgetOptions);
    tvWidget.onChartReady(() => {
      tvWidget
        .createButton()
        .attr("title", "Select or Search Pairings")
        .addClass("apply-common-tooltip")
        .on("click", () =>
          tvWidget.chart().executeActionById("symbolSearch")
        )[0].innerHTML = "Pairings";
      tvWidget
        .createButton()
        .attr("title", "Dark Mode")
        .addClass("apply-common-tooltip")
        .on("click", () => tvWidget.changeTheme("Dark"))[0].innerHTML = "Dark";
      tvWidget
        .createButton()
        .attr("title", "Light Mode")
        .addClass("apply-common-tooltip")
        .on("click", () => tvWidget.changeTheme("Light"))[0].innerHTML =
        "Light";
      setstate(tvWidget);
    });
  }, []);

  useEffect(() => {
    if (state) state.chart().setSymbol(symbol);
  }, [symbol]);

  return (
    <div
      id={containerId}
      className="TVChartContainer"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

TVChartContainer.defaultProps = {
  symbol: "BTCUSD",
  interval: "60",
  containerId: "tv-chart",
  libraryPath: "/lib/charting_library/",
  chartsStorageUrl: "https://saveload.tradingview.com",
  chartsStorageApiVersion: "1.1",
  clientId: "chart_box",
  userId: "user",
  fullscreen: false,
  timezone: "Asia/Tehran",
  autosize: false,
  studiesOverrides: {},
  theme: "Dark",
};

export default TVChartContainer;
