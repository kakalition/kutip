export default function WelcomeFragmentOneComponent(props) {
    function toLogin() {
        window.location.href = "/login";
    }

    function toRegister() {
        window.location.href = "/register";
    }

    return (
        <div
            id="parent-layout"
            className="h-screen w-screen bg-primary px-[10vw]"
        >
            <div
                id="flex-layout"
                className="flex h-full flex-col justify-center"
            >
                <h1
                    className="text-center font-playfair-display text-[calc(3rem+10vw)] font-bold tracking-wide text-secondary
                    lg:pl-24 lg:text-left lg:text-[calc(4rem+10vw)]"
                >
                    Kutip
                </h1>

                <h2
                    className="font-regular w-full text-center font-playfair-display text-[calc(1rem+5vw)] leading-[calc(1rem+7vw)] tracking-tight text-secondary 
                    lg:pl-24 lg:text-left lg:leading-[calc(1rem+6vw)]"
                >
                    Curated quotes to bring up your day.
                </h2>

                <div className="h-16 lg:h-12" />

                <div
                    className="flex flex-col items-center 
                        lg:flex-row lg:pl-24"
                >
                    <button
                        className="rounded-full
                        border-2 border-secondary py-[3vw] px-[7vw] font-poppins text-3xl text-[calc(1rem+2vw)] font-semibold text-secondary 
                        transition-all hover:scale-[1.04] hover:bg-secondary hover:text-white 
                        md:border-[3px]
                        lg:border-4 lg:py-[1.5vw] lg:px-[3vw] lg:text-[calc(0.8rem+1vw)]"
                        type="button"
                        onClick={toRegister}
                    >
                        Sign Up
                    </button>

                    <div className="w-8" />

                    <button
                        className="p-5 font-poppins text-[calc(1rem+2vw)] font-semibold text-secondary 
                        lg:text-[calc(0.8rem+1vw)]"
                        type="button"
                        onClick={toLogin}
                    >
                        Login
                    </button>
                </div>

                <div className="lg:h-28" />
            </div>
        </div>
    );
}
