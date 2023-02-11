// jshint esversion:6
import "./AuthPage.scss";
import { SignIn, Register } from "../../components";
import { Link, useLocation, useNavigate } from "react-router-dom";

function AuthPage() {

    // Use Navigate to navigate between pages
    const navigate = useNavigate();

    // Get URL of current page
    const location = useLocation();

    return (
        <>
            <div className="authPage-container">
                <h1 className="authPageTitle" onClick={() => navigate("/")}>finteK</h1>

                {/* Render Login form or sign-in form based on url pathname */}
                {location.pathname === "/login" ? (<SignIn />) : (<Register />)}

                {/* Render page footnote based on URL pathname */}
                {location.pathname === "/login" && (<p className="text-xl">
                    <Link to={"/register"}>Don't have an account? Register</Link>
                </p>)}

                {location.pathname === "/login" && (<p className="text-xl">
                    <Link to={"/register"}>Forgot Password?</Link>
                </p>)}

                {location.pathname === "/register" && (<p className="text-xl">
                    <Link to={"/login"}>Already have an account? Log In</Link>
                </p>)}
            </div>
        </>
    );
}

export { AuthPage };