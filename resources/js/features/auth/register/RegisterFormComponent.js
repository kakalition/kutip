import axios from 'axios';
import { CommonInputBuilder } from '../../../common-component/CommonInputBuilder';

export default function RegisterForm(props) {

    function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(document.getElementById("register-form"));
        const config = {
            headers: {
                'X-CSRF-TOKEN': document.querySelector("meta[name='csrf-token']").content
            }
        }
        axios.post("/register", formData, config).then((response) => window.location.href = "/");
    }

    return (
        <>
            <h1 className="ml-28 font-playfair-display font-bold text-secondary text-8xl">New Account</h1>
            <div className="h-20"/>
            <form id="register-form" className="ml-28" onSubmit={onSubmit} >
                <div>{ CommonInputBuilder("text", "name", "Name", "Joseph Joestar") }</div>
                <div>{ CommonInputBuilder("email", "email", "Email address", "name@provider.com") }</div>
                <div>{ CommonInputBuilder("password", "password", "Password", "••••••••") }</div>
                <div>{ CommonInputBuilder("password", "password_confirmation", "Retype Password", "•••••••") }</div>
                <div><button className="form-button" type="submit">Create account</button></div>
            </form>
            <div className="h-8"/>
        </>
    );
}