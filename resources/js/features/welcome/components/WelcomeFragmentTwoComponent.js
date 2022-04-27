export default function WelcomeFragmentTwoComponent(props) {
    return (
        <div className="flex h-[120vh] w-screen items-center justify-center bg-secondary px-[10vw]">
            <div
                className="flex h-[100vh]
                    flex-col items-center justify-center p-8
                    lg:justify-center lg:p-24"
            >
                <h3
                    className="borderize w-[90%]
                        text-center font-playfair-display text-[calc(2rem+2vw)] font-semibold text-primary 
                        lg:w-full lg:text-left"
                >
                    Uplift your day with <br /> curated quotes.
                </h3>

                <div className="h-24" />

                <div
                    className="borderize flex w-[50%] flex-col justify-center 
                    rounded-3xl bg-slate-100 p-8 
                    lg:w-[70%] lg:place-self-end lg:p-12"
                >
                    <p className="font-regular font-playfair-display text-6xl text-[calc(1rem+2vw)] leading-tight text-secondary">
                        "Whatever can happen at any time can happen today."
                    </p>
                    <div className="h-4 lg:h-12" />
                    <p className="font-regular font-playfair-display text-4xl text-[calc(0.5rem+2vw)] text-secondary">
                        Seneca
                    </p>
                </div>
            </div>
        </div>
    );
}
