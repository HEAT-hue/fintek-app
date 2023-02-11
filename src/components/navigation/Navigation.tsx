// jshint esversion:6
import "./navigation.scss";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Navigation() {
  return (
    <>
      <header className="navigationbar">
        <NavBar />
      </header>
      <Outlet />
    </>
  );
}

export { Navigation };
