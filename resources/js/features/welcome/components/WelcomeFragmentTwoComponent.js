export default function WelcomeFragmentTwoComponent(props) {
    return (
        <div className="flex items-center justify-center w-screen h-[120vh] bg-secondary">
            <div>
                <h3 className="pl-24 font-playfair-display font-semibold text-8xl text-primary">
                    Uplift your day with
                    <br />
                    curated quotes.
                </h3>
                <div className="h-16"/>
                <div className="float-right w-1/3 mt-12 mr-44 p-14 rounded-3xl bg-slate-100">
                    <p className="font-playfair-display font-regular text-6xl text-secondary">
                        "Whatever can happen at any time can happen today."
                    </p>
                    <div className="h-12" />
                    <p className="font-playfair-display font-regular text-4xl text-secondary">
                        Seneca
                    </p>
                </div>
            </div>
        </div>
    );
}
