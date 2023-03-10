// jshint esversion:6
import BetterWay from "./Better/BetterWay";
import "./HomePage.scss";
import { Names } from "./List";
import "./DisplayGrid.scss";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <main>
        <section className="section1">
          <div className="betgrid">
            <BetterWay></BetterWay>
          </div>
          <div className="Overallcon">
            <div className="margintop">
              <div className="imageCont">
                <div className="image">
                  <div className="image1">
                    <img src={require("./Images/headerImg.png")} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section2">coming soon</section>

        <section className="GridCont">
          <div className="grid1">
            <h1>4 ways to build your savings</h1>

            <p>Earn 5%-15% when you save with any of these PiggyVest plans.</p>
            <li className="btn ssNav">
              <Link to="/register" style={{ color: "white" }}>
                Start Saving
              </Link>
            </li>
          </div>

          <div className="grid2">
            {Names.map((name) => {
              const { id } = name;
              return <NewList key={id} name={name}></NewList>;
            })}
          </div>
        </section>
        {/* Footer Component */}
      </main>
    </>
  );
}

const NewList = (props: any) => {
  const { img, title, description, link } = props.name;
  return (
    <>
      <div className="savingsCont">
        <li>
          <a href="#">
            <div className="imageContainer">
              <a href="#">
                <img src={img} alt="" />
              </a>
            </div>
            <div className="tittle">{title}</div>
            <div className="description">{description}</div>
            <div className="safecont">
              <div className="arrowcont">
                <div className="arr"></div>
              </div>
              <a className="hrefLink" href="#">
                {link}
              </a>
            </div>
          </a>
        </li>
      </div>
    </>
  );
};

export { HomePage };
