// jshint esversion:6
import "./dashboard.scss";
import { Outlet } from "react-router-dom";
import { FooterNav } from "./FooterNav";

function DashboardPage() {
  return (
    <div className="dash-container">
      
      {/* Desktop side navigation */}
      <div className="dash-aside">
        <h1>Desktop Side nav</h1>
      </div>

      {/* Main Page */}
      <div className="dash-main">
        {/* Render default home component */}
        <Outlet />

        {/* Mobile Footer Menu */}
        <FooterNav />
      </div>
    </div>
  );
}

export { DashboardPage }