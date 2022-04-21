import React from "react";
import ReactDOM from "react-dom";
import ArrowFabComponentBuilder from "../../common-component/ArrowFabComponent";
import axios from "axios";

function HomeHeader(props) {
    return (
        <div className="flex flex-row items-center justify-between px-8 py-6">
            <p className="font-playfair-display font-semibold text-secondary text-4xl">
                Kutip
            </p>
            <div className="flex flex-col">
                <p className="font-playfair-display font-semibold text-secondary text-2xl">
                    Kharisma Sri Wibowo
                </p>
                <p className="font-playfair-display font-semibold text-secondary text-xl">
                    Daily Limit: 1/10
                </p>
            </div>
        </div>
    );
}

function AuthorNameBuilder(props) {
    return (
        <h2 className="font-playfair-display font-black text-[12vmax] leading-none tracking-wide text-secondary">
            {props.value}
        </h2>
    );
}

export default function HomePage(props) {
    const username = JSON.parse(props.user)["name"];
    const authors = JSON.parse(props.authors).map((author) => <AuthorNameBuilder key={author} value={author.replace("-", " ")}/>);

    function logout() {
        axios.post("/logout");
    }

    return (
        <div id="root" className="w-screen bg-primary">
            <HomeHeader />
            <div className="h-24"/>
            <h2 className="font-playfair-display font-black text-[12vmax] leading-none tracking-wide text-[#8D1747]">
                Random
            </h2>
            {authors}
            <div className="h-24"/>
            <div className="fixed bottom-10 right-10">
            </div>
        </div>
    );
}

if (document.getElementById("home-root")) {
    const element = document.getElementById("home-root");
    const props = Object.assign({}, element.dataset);
    ReactDOM.render(
        <HomePage {...props} />,
        document.getElementById("home-root")
    );
}
