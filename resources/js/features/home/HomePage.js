import React from "react";
import ArrowFabComponent from "../../common-component/ArrowFabComponent";
import HomeHeaderComponent from "./components/HomeHeaderComponent";
import axios from "axios";
import ElementBinder from "../../utils/ElementBinder";
import ClassNameJoiner from "../../utils/ClassNameJoiner";

function AuthorNameBuilder(props) {
    let className =
        "text-left font-playfair-display text-[calc(1rem+6vw)] font-black leading-snug tracking-wide";

    if (props.textcolor != null) {
        className = ClassNameJoiner(className, props.textcolor);
    } else {
        className = ClassNameJoiner(className, "text-secondary");
    }

    return (
        <>
            <button type="button" onClick={props.onClick}>
                <h2 className={className}>{props.value}</h2>
            </button>
            <br/>
        </>
    );
}

export default function HomePage(props) {
    const authors = JSON.parse(props.authors).map((author) => {
        const formattedName = _.startCase(author);
        return (
            <AuthorNameBuilder
                key={author}
                value={formattedName}
                onClick={onClickBuilder(author)}
            />
        );
    });

    function onClickBuilder(endPointKey) {
        return () => {
            const formattedEndPoint = endPointKey.toLowerCase();
            window.location.href = `/quotes/${formattedEndPoint}`;
        };
    }

    function scrollToTop() {
        window.scroll({top: 0, behavior: "smooth"});
    }

    function logout() {
        axios.post("/logout").then(() => window.location.href = `/`);
    }

    return (
        <div id="root" className="w-screen min-h-screen select-none bg-primary px-[10vw]">
            <div className="h-8" />
            <HomeHeaderComponent logoutCallback={logout} username={props.username}/>
            <div className="h-24" />
            <AuthorNameBuilder value="Random" textcolor="text-[#8D1747]" />
            {authors}
            <div className="h-24" />
            <div className="fixed bottom-14 right-[10vw]">
                <ArrowFabComponent scrollCallback={scrollToTop}/>
            </div>
        </div>
    );
}

ElementBinder("home-root", <HomePage />);
