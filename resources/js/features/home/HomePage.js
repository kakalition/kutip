import React from "react";
import ArrowFabComponent from "../../common-component/ArrowFabComponent";
import HomeHeaderComponent from "./components/HomeHeaderComponent";
import axios from "axios";
import ElementBinder from "../../utils/ElementBinder";

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
        const formattedName = _.startCase(author);
        return <AuthorNameBuilder key={author} value={formattedName} onClick={onClickBuilder(author)} />
    });

    function onClickBuilder(endPointKey) {
        return () => {
            const formattedEndPoint = (endPointKey.toLowerCase());
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

ElementBinder("home-root", <HomePage />)
