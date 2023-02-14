import { NavLink } from "react-router-dom";
import "./Navlinks.css";

function NavLinks() {
  return (
    <ul className="Navlinks">
      <NavLink to="/" className="li">
        Home
      </NavLink>
      <NavLink to="/Save" className="li">
        Save
      </NavLink>
      <NavLink to="/Invest" className="li">
        Invest
        <ul className="Hoveffect">
          <NavLink to="/Piggy">Piggybank</NavLink>
          <NavLink to="/safelock">Safelock</NavLink>
          <NavLink to="/target">Target Savings</NavLink>
          <NavLink to="/flex">Flex Naira</NavLink>
        </ul>
      </NavLink>
      <NavLink to="/Stories" className="li">
        Stories
      </NavLink>
      <NavLink to="/Fags" className="li">
        FAQs
      </NavLink>
      <NavLink to="/Blog" className="li">
        Blog
      </NavLink>
      <NavLink to="/Ebook" className="li">
        Ebook
      </NavLink>
      <NavLink to="/login" className="li sevent seven">
        Sign in
      </NavLink>
      <NavLink to="/register" className="li nonpad whitecolor">
        create free account
      </NavLink>
    </ul>
  );
}

export default NavLinks;
