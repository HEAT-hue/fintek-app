// jshint esversion:6
import "./dashboard.scss";
import { Outlet } from "react-router-dom";
import { FooterNav, SideNav } from "./navigation";

function DashboardPage() {
  return (
    <div className="dash-container">

      {/* Desktop side navigation */}
      <div className="dash-side">
        <SideNav />
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