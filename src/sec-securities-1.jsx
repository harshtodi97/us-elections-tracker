// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function SecSecurities1() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BINANCE:BNBUSDT",
          "interval": "1",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "2",
          "locale": "en",
          "hide_top_toolbar": true,
          "allow_symbol_change": true,
          "save_image": false,
          "compareSymbols": [
            {
              "symbol": "BINANCE:ADAUSDT",
              "position": "SameScale"
            },
            {
              "symbol": "BINANCE:ATOMUSDT",
              "position": "SameScale"
            },
            {
              "symbol": "BINANCE:AXSUSDT",
              "position": "SameScale"
            },
            {
              "symbol": "BINANCE:ALGOUSDT",
              "position": "SameScale"
            }
          ],
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
    </div>
  );
}

export default memo(SecSecurities1);
