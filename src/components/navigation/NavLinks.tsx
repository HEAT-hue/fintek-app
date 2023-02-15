import { NavLink } from "react-router-dom";
import "./Navlinks.css";

function NavLinks(props: any) {
  return (
    <ul className="Navlinks">
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink to="/" className="li">
          Home
        </NavLink>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink to="/Save" className="li">
          Save
        </NavLink>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink to="/Invest" className="li">
          Invest
          <ul className="Hoveffect">
            <li>
              <NavLink to="/Piggy">Piggybank</NavLink>
            </li>
            <li>
              <NavLink to="/safelock">Safelock</NavLink>
            </li>
            <li>
              <NavLink to="/target">Target Savings</NavLink>
            </li>
            <li>
              <NavLink to="/flex">Flex Naira</NavLink>
            </li>
          </ul>
        </NavLink>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink to="/Stories" className="li">
          Stories
        </NavLink>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink to="/Fags" className="li">
          FAQs
        </NavLink>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink to="/Blog" className="li">
          Blog
        </NavLink>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink to="/Ebook" className="li">
          Ebook
        </NavLink>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink to="/login" className="li sevent seven">
          Sign in
        </NavLink>
      </li>
      <li
        className="nonpad"
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <NavLink to="/register" className="li whitecolor">
          create free account
        </NavLink>
      </li>
    </ul>
  );
}

export default NavLinks;
