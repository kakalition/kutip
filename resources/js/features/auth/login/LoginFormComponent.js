import axios from "axios";
import { CommonInputBuilder } from "../../../common-component/CommonInputBuilder";

export default function LoginFormComponent(props) {
    function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(document.getElementById("login-form"));
        const config = {
            headers: {
                "X-CSRF-TOKEN": document.querySelector(
                    "meta[name='csrf-token']"
                ).content,
            },
        };
        axios.post("/login", formData, config).then((response) => {
            if (response.status == 200) {
                window.location.href = "/quotes";
            }
        });
    }

    return (
        <div className="w-full flex flex-col items-center justify-center lg:items-start">
            <h1
                className="text-center font-playfair-display text-[calc(2rem+6vw)] font-bold text-secondary
            lg:text-left lg:text-[calc(2rem+3vw)]"
            >
                Welcome back
            </h1>
            <div className="h-20" />
            <form id="login-form" className="px-20 lg:px-0 w-full" onSubmit={onSubmit}>
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
                <div className="flex w-full flex-row items-center justify-start">
                    <input
                        className="h-6 w-6 accent-secondary"
                        type="checkbox"
                        id="remember"
                        name="remember"
                        value="true"
                    />
                    <div className="w-4" />
                    <label className="form-label" htmlFor="remember">
                        Remember me
                    </label>
                </div>
                <div className="h-8" />
                <button className="form-button" type="submit">
                    Login
                </button>
            </form>
            <div className="h-8" />
        </div>
    );
}
