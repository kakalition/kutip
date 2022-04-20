import { CommonInputBuilder } from '../../../common-component/CommonInputBuilder';

export default function RegisterForm(props) {
    return (
        <>
            <h1 className="ml-20 font-playfair-display font-bold text-secondary text-8xl">New Account</h1>
            <div className="h-20"></div>
            <div className="ml-20">{ CommonInputBuilder("text", "name", "Name", "Joseph Joestar") }</div>
            <div className="ml-20">{ CommonInputBuilder("email", "email", "Email address", "name@provider.com") }</div>
            <div className="ml-20">{ CommonInputBuilder("password", "password", "Password", "••••••••") }</div>
            <div className="ml-20">{ CommonInputBuilder("password", "password_confirmation", "Retype Password", "•••••••") }</div>
            <div className="h-8"></div>
            <div className="ml-20"><button className="form-button" type="submit">Create account</button></div>
        </>
    );
}