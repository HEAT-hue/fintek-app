// importing the necessary files
import "./Invest.scss";
import { StartSavingToday } from "../../ButtonComponent";
import PhoneImage from "./asset/phone.png";
import Card1 from "./asset/i-card1.png";
import Card2 from "./asset/i-card2.png";

const InvestPage = () => {
  // laying the structres
  return (
    <>
      <main className="invest-mainpage">
        {/* renders 100% width with side padding */}
        <section className="invest-section1">
          {/*renders 85% of the innerwidth  screen size  

           desktopview:column, mobileview:row */}
          <div className="section-texts">
            <h4>Invest on the go</h4>
            <div className="invest-securely">
              <p>
                Invest securely and confidently on the go. Up to 25% returns,
                6-12 month duration.
              </p>
            </div>
            <StartSavingToday />
          </div>
          <div className="invest-img">
            <div className="invest-img__svgpath">
              <svg
                className="cross alt headerIcon"
                width="75"
                height="75"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.2">
                  <path
                    d="M34.5601 36.8001H8.64014V28.4001H26.2401V10.5601H34.5601V36.8001Z"
                    fill="#7913E5"
                  ></path>
                  <path
                    d="M72.1602 36.8001H46.2402V10.5601H54.5602V28.4001H72.1602V36.8001Z"
                    fill="#7913E5"
                  ></path>
                  <path
                    d="M35.6798 69.6001H27.3598V51.7601H9.75977V43.3601H35.6798V69.6001Z"
                    fill="#7913E5"
                  ></path>
                  <path
                    d="M54.5602 69.6001H46.2402V43.3601H72.1602V51.7601H54.5602V69.6001Z"
                    fill="#7913E5"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="poAbsolute1">
              <img src={Card1} alt="card1" className="poAbsolute__card" />
            </div>
            <div className="poAbsolute2">
              <img src={Card2} alt="card2" className="poAbsolute__card" />
            </div>

            <img
              src={PhoneImage}
              alt="phone"
              className="invest-img__PhoneImage"
            />
          </div>
        </section>

        <div className="no">
          <h3>Simple investments with great returns</h3>
          <p>Investments are made readily accessible to everyone</p>
        </div>
        <section className="invest-section2">
          {/* 
            desktopView:3 columns, MobileView:3 rows 
            looping through them using mapping
          */}
          <div className="invest-col">
            <div className="invest-col__imageCont">image comes here</div>
            <div className="invest-col__Texts">texts comes here</div>
          </div>
        </section>
      </main>
      <section className="inevst-secon">
        {/* this renders 100vw */}
        <div className="investsecond">
          {/* desktopView:2 col, mobileView:2 rows */}
          <div className="secondsection-text">text comes here</div>
          <div className="invest-Se-image">image container</div>
        </div>
      </section>
      <section className="invest-last-section">
        {/* renders 80% of innerWidth  of screenSize*/}
        <div className="invest-stand-alone">
          <p>recent...</p>
        </div>
        <section className="gards">
          {/* 
            desktopView:2 rows with 3 columns each
            mobileview: 1 row that contains 8=6 cards
        */}
          {/* this can be acieved using mapping */}
          six cards come here
        </section>
      </section>
    </>
  );
};

export { InvestPage };
