import React from "react";
import ReactDOM from "react-dom";
import { AuthBuilder } from "../../../common-component/AuthBuilder";
import QuoteComponent from "../components/QuoteComponent";
import LoginFormComponent from "./LoginFormComponent";

export default function RegisterPage(props) {
    return AuthBuilder(<LoginFormComponent />, <QuoteComponent />);
}

if (document.getElementById("login-root")) {
    ReactDOM.render(<RegisterPage />, document.getElementById("login-root"));
}
