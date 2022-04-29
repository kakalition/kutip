import React from "react";
import ReactDOM from "react-dom";

export default function ElementBinder(rootName, jsx) {
    if (document.getElementById(rootName)) {
        const element = document.getElementById(rootName);
        const props = Object.assign({}, element.dataset);
        const root = React.cloneElement(jsx, {...props});
        ReactDOM.render(root, element);
    }
}