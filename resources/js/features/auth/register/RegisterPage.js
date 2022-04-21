import React from "react";
import ReactDOM from "react-dom";
import QuoteComponent from "../components/QuoteComponent";
import RegisterFormComponent from "./RegisterFormComponent";

export default function RegisterPage(props) {
    return (
        <div id="root" className="flex flex-row h-screen w-screen">
            <div
                id="left-side-wrapper"
                className="h-screen w-4/5 flex flex-col items-start justify-center bg-primary"
            >
                <div id="form-wrapper" className="w-full">
                    <RegisterFormComponent />
                </div>
            </div>
            <div
                id="right-side-wrapper"
                className="h-screen w-3/5 flex items-center justify-center bg-secondary"
            >
                <div id="quote-wrapper" className="w-full m-20">
                    <QuoteComponent />
                </div>
            </div>
        </div>
    );
}

if (document.getElementById("register-root")) {
    ReactDOM.render(<RegisterPage />, document.getElementById("register-root"));
}
