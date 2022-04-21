export default function WelcomeFragmentThreeComponent(props) {
    return (
        <div className="w-screen h-[170vh] bg-[#8D1747] flex justify-center items-center">
            <div className="w-full h-full">
                <div className="flex w-full items-end justify-end">
                    <h3 className="mt-32 mr-32 font-playfair-display font-regular text-7xl text-primary">
                        Many different
                        <br />
                        famous name to
                        <br />
                        choose from.
                    </h3>
                </div>
                <div className="h-44" />
                <h4 className="font-playfair-display font-black text-[14rem] leading-none tracking-wide text-[#FFA781]">
                    Epictetus
                </h4>
                <h4 className="font-playfair-display font-black text-[14rem] leading-none tracking-wide text-[#FFA781]">
                    Seneca
                </h4>
                <h4 className="font-playfair-display font-black text-[13rem] leading-none tracking-wide text-[#FFA781]">
                    Marcus Aurelius
                </h4>
                <h4 className="font-playfair-display font-black text-[13rem] leading-none tracking-wide text-white">
                    And many more!
                </h4>
            </div>
        </div>
    );
}
