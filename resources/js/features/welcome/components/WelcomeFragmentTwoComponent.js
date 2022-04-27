export default function WelcomeFragmentTwoComponent(props) {
    return (
        <div className="flex h-[120vh] w-screen items-center justify-center bg-secondary">
            <div
                className="flex h-[100vh]
                    flex-col items-center justify-center p-8 lg:grid
                    lg:grid-cols-5 lg:grid-rows-2 lg:items-stretch lg:justify-center lg:p-24"
            >
                <h3
                    className="w-[90%] text-center
                        font-playfair-display text-[calc(2rem+2vw)] font-semibold text-primary lg:col-start-1
                        lg:col-end-4 lg:row-start-1 lg:row-end-2 lg:w-full lg:text-left"
                >
                    Uplift your day with curated quotes.
                </h3>

                <div className="h-20 lg:h-0" />

                <div
                    className="lg:placeholder: flex w-[90%] flex-col justify-center
                    rounded-3xl bg-slate-100 p-8 lg:col-start-3 lg:col-end-6 
                    lg:row-start-2 lg:row-end-3 lg:w-full"
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
