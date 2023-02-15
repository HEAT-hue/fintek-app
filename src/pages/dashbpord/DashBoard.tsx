// jshint esversion:6
import "./Mobile.css";
import "./desktop.css";

export const DashBoard = () => {
  return (
    <>
      <section className="leftsection">
        {Details.map((tab: any) => {
          const { id } = tab;
          return <Tabs key={id} tab={tab}></Tabs>;
        })}
      </section>
      <section className="rightsection">
        <div>
          <h1>welcome to your dashboard</h1>
        </div>
      </section>
    </>
  );
};

const Tabs = (props: any) => {
  return (
    <>
      <div className="ColContainer">
        <div className="imagcont">{props.tab.img}</div>
        <h4 className="titleName">{props.tab.title}</h4>
      </div>
    </>
  );
};

const Details = [
  {
    id: 1,
    img: "img1",
    title: "Home",
  },
  {
    id: 2,
    img: "img2",
    title: "Savings",
  },
  {
    id: 3,
    img: "img3",
    title: "Invest",
  },
  {
    id: 4,
    img: "img4",
    title: "Account",
  },
];
// export { DashBoard };
