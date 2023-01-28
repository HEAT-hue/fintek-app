// jshint esversion:6
import "./SignInPage.scss";
import { SignIn } from "../../components";


function SignInPage() {
    return (
        <>
            <div className="signInPage-container">
                <SignIn />
            </div>
        </>
    );
}

export { SignInPage };