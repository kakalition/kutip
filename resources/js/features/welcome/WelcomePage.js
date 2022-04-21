import React from "react";
import ReactDOM from "react-dom";
import WelcomeFragmentOneComponent from "./components/WelcomeFragmentOneComponent";
import WelcomeFragmentTwoComponent from "./components/WelcomeFragmentTwoComponent";
import WelcomeFragmentThreeComponent from "./components/WelcomeFragmentThreeComponent";
import WelcomeFragmentFourComponent from "./components/WelcomeFragmentFourComponent";

export default function WelcomePage(props) {
    return (
        <div className="select-none">
            <WelcomeFragmentOneComponent/>
            <WelcomeFragmentTwoComponent/>
            <WelcomeFragmentThreeComponent/>
            <WelcomeFragmentFourComponent/>
        </div>
    );
}

if (document.getElementById("welcome-root")) {
    ReactDOM.render(<WelcomePage />, document.getElementById("welcome-root"));
}