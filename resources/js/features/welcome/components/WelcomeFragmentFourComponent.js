import ArrowFabComponent from "../../../common-component/ArrowFabComponent";

export default function WelcomeFragmentFourComponent(props) {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#5B0B2C]">
            <h3 className="font-poppins font-regular text-[calc(1rem+3vw)] text-center text-primary">
                Sign up to get started
            </h3>
            <div className="h-[10vw] lg:h-[5vw]" />
            <ArrowFabComponent toTopCallback={props.toTopCallback}/>
        </div>
    );
}
