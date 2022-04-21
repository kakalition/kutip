import React from "react";
import ReactDOM from "react-dom";
import WelcomeFragmentOneComponent from "./components/WelcomeFragmentOneComponent";

export default function WelcomePage(props) {
    return (
        <>
            <WelcomeFragmentOneComponent/>
            <div className="w-screen h-screen bg-secondary"></div>
            <div className="w-screen h-screen bg-[#8D1747]"></div>
            <div className="w-screen h-screen bg-[#5B0B2C]"></div>
        </>
    );
}

if (document.getElementById("welcome-root")) {
    ReactDOM.render(<WelcomePage />, document.getElementById("welcome-root"));
}