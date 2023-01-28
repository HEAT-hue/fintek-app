// jshint esversion:6
import "./SignInPage.scss";
import { SignIn } from "../../components";
import { Link } from "react-router-dom";


function SignInPage() {
    return (
        <>
            <div className="signInPage-container">
                <h1 className="signInPageTitle">finteK</h1>
                <SignIn />
                <p className="text-xl">
                    <Link to={"/register"}>Don't have an account? Register</Link>
                </p>
                <p className="text-xl">
                    <Link to={"/register"}>Forgot Password?</Link>
                </p>
            </div>
        </>
    );
}

export { SignInPage };