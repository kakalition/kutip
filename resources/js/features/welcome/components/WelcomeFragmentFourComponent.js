import ArrowFabComponent from "../../../common-component/ArrowFabComponent";

export default function WelcomeFragmentFourComponent(props) {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#5B0B2C]">
            <h3 className="font-playfair-display font-regular text-6xl text-center text-primary">
                Sign up to get started
            </h3>
            <div className="h-28" />
            <ArrowFabComponent/>
        </div>
    );
}
