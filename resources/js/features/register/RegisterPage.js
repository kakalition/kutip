import React from 'react';
import ReactDOM from 'react-dom';

export default function RegisterPage(props) {
    return (
        <div className="flex flex-row h-screen w-screen">
            <div className="bg-primary h-screen w-3/5"></div>
            <div className="bg-secondary h-screen w-2/5"></div>
        </div>
    );
}

if(document.getElementById('register-root')) {
    ReactDOM.render(<RegisterPage/>, document.getElementById('register-root'));
}