import "./Error.css";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div className="Error">
      <h1>404</h1>
      <p className="p">Page not found</p>
      <li className="center">
        <NavLink to="/" className="error">
          back home
        </NavLink>
      </li>
    </div>
  );
}

export { Error };
