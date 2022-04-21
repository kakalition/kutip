export default function WelcomeFragmentOneComponent(props) {

    function toLogin() {
        window.location.href = '/login';
    }

    function toRegister() {
        window.location.href = '/register';
    }

    return (
        <div className="h-screen w-screen bg-primary">
            <h1 className="ml-24 font-playfair-display font-black text-[14rem] tracking-wide text-secondary">
                Kutip
            </h1>

            <div className="h-6" />

            <h2 className="pl-24 w-full font-playfair-display font-regular text-[9rem] tracking-tight leading-[8rem] text-secondary">
                Curated quotes
                <br />
                to bring up your day.
            </h2>

            <div className="h-24" />

            <div className="ml-24 flex flex-row items-center">
                <button
                    className="py-8 px-20 
                        border-secondary border-4 rounded-full font-poppins font-semibold text-3xl text-secondary
                        hover:bg-secondary hover:text-white hover:scale-[1.04] transition-all"
                    type="button"
                    onClick={toRegister}
                >
                    Sign Up
                </button>

                <div className="w-8" />

                <button
                    className="p-5 font-poppins font-semibold text-4xl text-secondary"
                    type="button"
                    onClick={toLogin}
                >
                    Login
                </button>
            </div>
        </div>
    );
}
