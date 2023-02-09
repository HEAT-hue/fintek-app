// jshint esversion:6
import BetterWay from "./Better/BetterWay";
import { DisplayGrid } from "../../components";
import "./HomePage.scss";

function HomePage(Names: any) {
  return (
    <>
      <section className="section1">
        <BetterWay></BetterWay>
        <div className="imageCont">
          <div className="image"></div>
          <div className="image1"></div>
        </div>
      </section>
      <section className="section2">coming soon</section>
      <section className="section3">
        <DisplayGrid></DisplayGrid>
      </section>
    </>
  );
}

export { HomePage };
