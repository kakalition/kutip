import React from "react";
import ReactDOM from "react-dom";
import WelcomeFragmentOneComponent from "./components/WelcomeFragmentOneComponent";
import WelcomeFragmentTwoComponent from "./components/WelcomeFragmentTwoComponent";
import WelcomeFragmentThreeComponent from "./components/WelcomeFragmentThreeComponent";
import WelcomeFragmentFourComponent from "./components/WelcomeFragmentFourComponent";

export default function WelcomePage(props) {

    function scrollToTop() {
        window.scroll({top: 0, behavior: "smooth"});
    }

    return (
        <div className="select-none">
            <WelcomeFragmentOneComponent/>
            <WelcomeFragmentTwoComponent/>
            <WelcomeFragmentThreeComponent/>
            <WelcomeFragmentFourComponent toTopCallback={scrollToTop}/>
        </div>
    );
}

if (document.getElementById("welcome-root")) {
    ReactDOM.render(<WelcomePage />, document.getElementById("welcome-root"));
}