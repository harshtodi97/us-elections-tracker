import React from "react";
import BtcEthWidget from "./btc-eth";
import MajorAlts from "./major-alts";
import CandidateMeme from "./candidate-meme";
import TrumpRelated from "./trump-related";
import Defi from "./defi";
import Stablecoins from "./stable";
import Memecoins from "./memecoin";
import ArtInt from "./ai";
import RWA from "./rwa";
import SecSecurities1 from "./sec-securities-1";
import SecSecurities2 from "./sec-securities-2";

function App() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    // overflowY: "auto",
    // padding: "16px",
  };

  const rowStyle = {
    display: "flex",
    flex: 1,
    width: "100%",
    minHeight: "48vh",
    marginBottom: "16px",
  };

  const boxStyle = {
    flex: 1,
    backgroundColor: "#f0f0f0",
    border: "1px solid #ddd",
    display: "flex",
    flexDirection: "column",
    marginRight: "16px",
  };

  const lastBoxStyle = {
    ...boxStyle,
    marginRight: "0", // Remove right margin from the last box in the row
  };

  const headerStyle = {
    backgroundColor: "#f0f0f0",
    color: "black",
    fontWeight: "bold",
    padding: "8px",
    textAlign: "left",
  };

  const contentStyle = {
    flex: 1,
    // padding: "16px",
    backgroundColor: "#ffffff",
  };

  return (
    <div style={containerStyle}>
      {/* Row 1 */}
      <div style={rowStyle}>
        <div style={boxStyle}>
          <div style={headerStyle}>BTC & ETH</div>
          <div style={contentStyle}>
            <BtcEthWidget />
          </div>
        </div>
        <div style={lastBoxStyle}>
          <div style={headerStyle}>Alt L1s & L2s</div>
          <div style={contentStyle}>
            <MajorAlts />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div style={rowStyle}>
        <div style={boxStyle}>
          <div style={headerStyle}>Trump & Kamala Memecoins</div>
          <div style={contentStyle}>
            <CandidateMeme />
          </div>
        </div>
        <div style={lastBoxStyle}>
          <div style={headerStyle}>Trump & Elon Related Tokens</div>
          <div style={contentStyle}>
            <TrumpRelated />
          </div>
        </div>
      </div>

      <div style={rowStyle}>
        <div style={boxStyle}>
          <div style={headerStyle}>Tokens Deemed Securities 1</div>
          <div style={contentStyle}>
            <SecSecurities1 />
          </div>
        </div>
        <div style={lastBoxStyle}>
          <div style={headerStyle}>Tokens Deemed Securities 2</div>
          <div style={contentStyle}>
            <SecSecurities2 />
          </div>
        </div>
      </div>

      <div style={rowStyle}>
        <div style={boxStyle}>
          <div style={headerStyle}>Decentralized Finance</div>
          <div style={contentStyle}>
            <Defi />
          </div>
        </div>
        <div style={lastBoxStyle}>
          <div style={headerStyle}>Stablecoins</div>
          <div style={contentStyle}>
            <Stablecoins />
          </div>
        </div>
      </div>

      <div style={rowStyle}>
        <div style={boxStyle}>
          <div style={headerStyle}>Memecoins</div>
          <div style={contentStyle}>
            <Memecoins />
          </div>
        </div>
        <div style={lastBoxStyle}>
          <div style={headerStyle}>Artificial Intelligence</div>
          <div style={contentStyle}>
            <ArtInt />
          </div>
        </div>
      </div>

      <div style={rowStyle}>
        <div style={boxStyle}>
          <div style={headerStyle}>Real World Assets</div>
          <div style={contentStyle}>
            <RWA />
          </div>
        </div>
        {/* <div style={lastBoxStyle}>
          <div style={headerStyle}>Artificial Intelligence</div>
          <div style={contentStyle}>
            <ArtInt />
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
