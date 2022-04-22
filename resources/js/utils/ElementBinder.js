import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../store";

export default function ElementBinder(rootName, jsx) {
    if (document.getElementById(rootName)) {
        const element = document.getElementById(rootName);
        const props = Object.assign({}, element.dataset);
        const root = React.cloneElement(jsx, {...props});
        ReactDOM.render(<Provider store={store}>{root}</Provider>, element);
    }
}
