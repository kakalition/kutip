export default function WelcomeFragmentThreeComponent(props) {
    return (
        <div className="flex min-h-[110vh] w-screen items-center justify-center bg-[#8D1747] p-[10vw]">
            <div className="borderize flex h-full w-full flex-col">
                <h3 className="font-regular place-self-end font-playfair-display text-[calc(2rem+3vw)] leading-[calc(1rem+8vw)] text-primary
                    md:leading-[calc(1rem+7vw)]
                    lg:leading-[calc(1rem+6vw)]">
                    Many different
                    <br />
                    famous name to
                    <br />
                    choose from.
                </h3>
                <div className="h-44" />
                <h4 className="font-playfair-display text-[calc(2rem+4vw)] font-black leading-none tracking-wide text-[#FFA781]">
                    Epictetus
                </h4>
                <div className="h-4" />
                <h4 className="font-playfair-display text-[calc(2rem+4vw)] font-black leading-none tracking-wide text-[#FFA781]">
                    Seneca
                </h4>
                <div className="h-4" />
                <h4 className="font-playfair-display text-[calc(2rem+4vw)] font-black leading-none tracking-wide text-[#FFA781]">
                    Marcus Aurelius
                </h4>
                <div className="h-4" />
                <h4 className="font-playfair-display text-[calc(2rem+4vw)] font-black leading-none tracking-wide text-white">
                    And many more!
                </h4>
            </div>
        </div>
    );
}
