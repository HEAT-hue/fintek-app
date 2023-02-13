import NavLinks from "./NavLinks";
import "./DesktopNav.css";

function DesktopNav() {
  return (
    <div className="desktopNav">
      <nav className="navbar">
        <NavLinks />
      </nav>
    </div>
  );
}

export default DesktopNav;
