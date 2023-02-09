import React from "react";
import "./DisplayGrid.scss";

import { Names } from "./List";
const newNames = Names.map((name) => {
  const { img, title, description, link } = name;
  return (
    <>
      <div className="savingsCont">
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
      </div>
    </>
  );
});

export const DisplayGrid = (Names: any) => {
  const { id } = Names;
  return <div key={id}>{newNames}</div>;
};
