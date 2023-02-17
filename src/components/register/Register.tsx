// jshint esversion:6
import { useState } from "react";
import "./Register.scss";
import { NavLink } from "react-router-dom";

function Register() {
  const AboutUsOptionList = [
    "Facebook",
    "Instagram",
    "Google search",
    "Google Playstore",
  ];
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <>
      <div className="authForm-container">
        <form action="GET" className="authForm">
          <div className="form-header">
            <h2 className="form-title">Create a Secure Account</h2>
            <h3 className="form-subtitle text-sm">
              Welcome to the future of Savings & Investments
            </h3>
          </div>

          <div className="form-body">
            <div className="form-field-wrapper">
              <label htmlFor="text">Full Name</label>
              <input type="text" id="text" placeholder="Full Name" />
            </div>

            <div className="form-field-wrapper">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Email Address" />
            </div>

            <div className="form-field-wrapper">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" placeholder="Phone Number" />
            </div>

            <div className="form-field-wrapper">
              <label htmlFor="password">Email or Phone Number</label>
              <input
                type="password"
                id="password"
                placeholder="Email or Phone Number"
              />
            </div>

            <div className="form-field-wrapper">
              <label htmlFor="ref-text">
                Referrer Phone or Promo Code (Optional)
              </label>
              <input
                type="text"
                id="ref-text"
                placeholder="Referrer Phone or code"
              />
            </div>

            <div className="form-field-wrapper">
              <label htmlFor="aboutUs">
                How Did You Hear About Us? (Optional)
              </label>
              <select
                id="aboutUs"
                aria-label="Select an option on how you heard about us"
                value={selectedOption}
                onChange={(event) => setSelectedOption(event.target.value)}
              >
                <>
                  <option value="" selected disabled>
                    Click to Select
                  </option>
                  {AboutUsOptionList.map((option) => {
                    return (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </>
              </select>
            </div>

            <div className="btn-wrapper">
              <li className="btn submitBtn">
                <NavLink to="/dashboard">CREATE ACCOUNT</NavLink>
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

export { Register };
