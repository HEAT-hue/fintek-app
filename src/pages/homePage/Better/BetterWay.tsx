import React from "react";
import { CreateAccountBtn } from "../../../components";
import { Download } from "../../../components";
import "./Better.scss";

const BetterWay = () => {
  return (
    <>
      <div className="BetterwayContainer">
        <div className="Betterway">
          <h1>The Better Way to Save & Invest.</h1>
          <p>
            PiggyVest helps over 4 million customers achieve their financial
            goals by helping them save and invest with ease.
          </p>
        </div>
        <CreateAccountBtn />
        <Download />
      </div>
    </>
  );
};

export default BetterWay;
