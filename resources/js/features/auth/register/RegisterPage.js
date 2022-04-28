import React from "react";
import ReactDOM from "react-dom";
import { AuthBuilder } from "../../../common-component/AuthBuilder";
import QuoteComponent from "../components/QuoteComponent";
import RegisterFormComponent from "./RegisterFormComponent";

export default function RegisterPage(props) {
    return AuthBuilder(<RegisterFormComponent />, <QuoteComponent />);
}

if (document.getElementById("register-root")) {
    ReactDOM.render(<RegisterPage />, document.getElementById("register-root"));
}
