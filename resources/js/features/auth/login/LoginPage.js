import React from "react";
import ReactDOM from "react-dom";
import QuoteComponent from "../components/QuoteComponent";
import LoginFormComponent from "./LoginFormComponent";

export default function RegisterPage(props) {
    return (
        <div
            id="root"
            className="flex h-screen w-screen flex-col
            lg:flex-row"
        >
            <div
                id="form-wrapper"
                className="flex h-screen w-full flex-col items-center justify-center bg-primary 
                lg:px-[10vw]"
            >
                <LoginFormComponent />
            </div>
            <div
                id="quote-wrapper"
                className="lg:single-centering 
                hidden lg:visible lg:h-screen lg:w-3/5 lg:bg-secondary lg:px-12"
            >
                <QuoteComponent />
            </div>
        </div>
    );
}

if (document.getElementById("login-root")) {
    ReactDOM.render(<RegisterPage />, document.getElementById("login-root"));
}
