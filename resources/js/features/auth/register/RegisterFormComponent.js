import axios from "axios";
import { CommonInputBuilder } from "../../../common-component/CommonInputBuilder";

export default function RegisterForm(props) {
    function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(document.getElementById("register-form"));
        const config = {
            headers: {
                "X-CSRF-TOKEN": document.querySelector(
                    "meta[name='csrf-token']"
                ).content,
            },
        };
        axios.post("/register", formData, config).then((response) => {
            if (response.status == 200) {
                window.location.href = "/quotes";
            }
        });
    }

    return (
        <div className="flex w-full flex-col items-center justify-center lg:items-start">
            <h1
                className="text-center font-playfair-display text-[calc(2rem+6vw)] font-bold text-secondary
                lg:text-left lg:text-[calc(2rem+3vw)]"
            >
                New Account
            </h1>
            <div className="h-20" />
            <form 
                id="register-form" 
                className="w-full px-20 lg:px-0" 
                onSubmit={onSubmit}>
                <div>
                    {CommonInputBuilder(
                        "text",
                        "name",
                        "Name",
                        "Joseph Joestar"
                    )}
                </div>
                <div>
                    {CommonInputBuilder(
                        "email",
                        "email",
                        "Email address",
                        "name@provider.com"
                    )}
                </div>
                <div>
                    {CommonInputBuilder(
                        "password",
                        "password",
                        "Password",
                        "••••••••"
                    )}
                </div>
                <div>
                    {CommonInputBuilder(
                        "password",
                        "password_confirmation",
                        "Retype Password",
                        "•••••••"
                    )}
                </div>
                <div>
                    <button className="form-button" type="submit">
                        Create account
                    </button>
                </div>
            </form>
            <div className="h-8" />
        </div>
    );
}
