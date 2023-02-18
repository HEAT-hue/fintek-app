// importing the necessary files
import "./Invest.scss";

const InvestPage = () => {
  // laying the structres
  return (
    <>
      <main className="invest-mainpage">
        {/* renders 100% width with side padding */}
        <section className="invest-section1">
          {/*renders 85%of the innerwidth  screen size  

           desktopview:column, mobileview:row */}
          <div className="section-texts">hello</div>
          <div className="invest-img">welcome</div>
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
