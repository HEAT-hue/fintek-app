// jshint esversion:6
import "./SignIn.scss";
import { NavLink } from "react-router-dom";

function SignIn() {
  return (
    <>
      <div className="authForm-container">
        <form action="GET" className="authForm">
          <div className="form-header">
            <h2 className="form-title">Login to your account</h2>
            <h3 className="form-subtitle text-small">
              Securely login to your finteK
            </h3>
          </div>

          <div className="form-body">
            <div className="form-field-wrapper">
              <label htmlFor="email">Email or Phone Number</label>
              <input type="email" id="email" />
            </div>

            <div className="form-field-wrapper">
              <label htmlFor="password">Email or Phone Number</label>
              <input type="password" id="password" />
            </div>

            <div className="btn-wrapper">
              <li className="btn submitBtn">
                <NavLink to="/dashboard">LOG IN</NavLink>
              </li>
              {/* <button type="submit" className="btn submitBtn">
                LOG IN
              </button> */}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export { SignIn };
