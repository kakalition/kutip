import axios from 'axios';
import { CommonInputBuilder } from '../../../common-component/CommonInputBuilder';

export default function RegisterForm(props) {

    function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(document.getElementById("login-form"));
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
            <form id="login-form" className="ml-28" onSubmit={onSubmit} >
                <div>{ CommonInputBuilder("email", "email", "Email address", "name@provider.com") }</div>
                <div>{ CommonInputBuilder("password", "password", "Password", "••••••••") }</div>
                <button className="form-button" type="submit">Create account</button>
            </form>
            <div className="h-8"/>
        </>
    );
}