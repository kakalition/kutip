import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios'

export default function HomePage(props) {

    function logout() {
        axios.post('/logout')
    }

    const username = JSON.parse(props.user)["name"];
    return (
        <div id="root" className="h-screen w-screen bg-primary">
            <h1 className="font-bold font-poppins text-secondary text-xl float-right" onClick={logout}>{username}</h1>
        </div>
    );
}

if (document.getElementById("home-root")) {
    const element = document.getElementById("home-root");
    const props = Object.assign({}, element.dataset);
    ReactDOM.render(<HomePage {...props}/>, document.getElementById("home-root"));
}