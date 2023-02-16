// jshint esversion:6
import "./dashboard.scss";
import { Outlet } from "react-router-dom";
import { FooterNav } from "./FooterNav";

function DashboardPage() {
  return (
    <div className="dash-container">
      <div className="dash-aside">
        <h1>Desktop Side nav</h1>
      </div>
      <div className="dash-main">
        <Outlet />
        <FooterNav />
      </div>
    </div>
  );
}

export { DashboardPage }