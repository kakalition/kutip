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
        axios
            .post("/login", formData, config)
            .then((response) => {
                if (response.status == 200) {
                    window.location.href = "/quotes";
                }
            });
    }

    return (
        <>
            <h1 className="ml-28 font-playfair-display font-bold text-secondary text-8xl">
                Welcome back
            </h1>
            <div className="h-20" />
            <form id="login-form" className="ml-28" onSubmit={onSubmit}>
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
                <div className="flex flex-row items-center justify-start w-2/3">
                    <input
                        className="h-8 w-8 accent-sky-300 focus:outline-sky-300"
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
        </>
    );
}
