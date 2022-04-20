import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './components/RegisterForm';

export default function RegisterPage(props) {
    return (
        <div className="flex flex-row h-screen w-screen">
            <div className="h-screen w-3/5 flex flex-col items-start justify-center bg-primary">
                <div className='w-full'>
                    <RegisterForm />
                </div>
            </div>
            <div className="h-screen w-2/5 bg-secondary"></div>
        </div>
    );
}

if(document.getElementById('register-root')) {
    ReactDOM.render(<RegisterPage/>, document.getElementById('register-root'));
}