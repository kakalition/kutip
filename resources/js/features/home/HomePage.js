import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios'

function HomeHeader(props) {
    return (
        <div className="flex flex-row items-center justify-between px-8 py-6">
            <p className="font-playfair-display font-semibold text-secondary text-4xl">Kutip</p>
            <div className="flex flex-col">
                <p className="font-playfair-display font-semibold text-secondary text-2xl">Kharisma Sri Wibowo</p>
                <p className="font-playfair-display font-semibold text-secondary text-xl">Daily Limit: 1/10</p>
            </div>
        </div>
    );
}

export default function HomePage(props) {

    const username = JSON.parse(props.user)["name"];

    function logout() {
        axios.post('/logout')
    }

    return (
        <div id="root" className="h-screen w-screen bg-primary">
            <HomeHeader/>
        </div>
    );
}

if (document.getElementById("home-root")) {
    const element = document.getElementById("home-root");
    const props = Object.assign({}, element.dataset);
    ReactDOM.render(<HomePage {...props}/>, document.getElementById("home-root"));
}