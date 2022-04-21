import React from "react";
import ReactDOM from "react-dom";
import ArrowFabComponent from "../../common-component/ArrowFabComponent";
import HomeHeaderComponent from "./components/HomeHeaderComponent";
import axios from "axios";

function AuthorNameBuilder(props) {

    return (
        <button className="" type="button" onClick={props.onClick}>
            <h2 className="font-playfair-display font-black text-[12vmax] leading-snug tracking-wide text-secondary">
                {props.value}
            </h2>
        </button>
    );
}

export default function HomePage(props) {
    const username = JSON.parse(props.user)["name"];
    
    const authors = JSON.parse(props.authors).map((author) => {
        const formattedName = author.replace("-", " ");
        return <AuthorNameBuilder key={author} value={formattedName} onClick={onClickBuilder(formattedName)} />
    });


    function onClickBuilder(endPointKey) {
        return () => {
            console.log('click')
            const formattedEndPoint = (endPointKey.toLowerCase()).replace(/\s/g, "");
            window.location.href = `/quotes/${formattedEndPoint}`
        }
    }

    function logout() {
        axios.post("/logout");
    }

    return (
        <div id="root" className="w-screen select-none bg-primary">
            <HomeHeaderComponent />
            <div className="h-24" />
            <h2 className="font-playfair-display font-black text-[12vmax] leading-snug tracking-wide text-[#8D1747]">
                Random
            </h2>
            {authors}
            <div className="h-24" />
            <div className="fixed bottom-10 right-10">
                <ArrowFabComponent />
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
