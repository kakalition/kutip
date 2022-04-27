export default function WelcomeFragmentThreeComponent(props) {
    return (
        <div className="flex min-h-[110vh] w-screen items-center justify-center bg-[#8D1747] p-[10vw]">
            <div className="flex h-full w-full flex-col">
                <h3
                    className="font-regular place-self-end font-playfair-display text-[calc(2rem+1vw)] leading-[calc(1rem+8vw)] text-primary
                    md:leading-[calc(1rem+7vw)]
                    lg:leading-[calc(1rem+6vw)]"
                >
                    Many different
                    <br />
                    famous name to
                    <br />
                    choose from.
                </h3>
                <div className="h-[calc(8rem+5vw)]" />
                <h4
                    className="font-playfair-display text-[calc(2rem+2vw)] font-black leading-none tracking-wide text-[#FFA781]
                md:text-[calc(2rem+4vw)]"
                >
                    Epictetus
                </h4>
                <div className="h-4" />
                <h4
                    className="font-playfair-display text-[calc(2rem+2vw)] font-black leading-none tracking-wide text-[#FFA781]
                md:text-[calc(2rem+4vw)]"
                >
                    Seneca
                </h4>
                <div className="h-4" />
                <h4
                    className="font-playfair-display text-[calc(2rem+2vw)] font-black leading-none tracking-wide text-[#FFA781]
                md:text-[calc(2rem+4vw)]"
                >
                    Marcus Aurelius
                </h4>
                <div className="h-4" />
                <h4
                    className="font-playfair-display text-[calc(2rem+2vw)] font-black leading-none tracking-wide text-white
                md:text-[calc(2rem+4vw)]"
                >
                    And many more!
                </h4>
            </div>
        </div>
    );
}
