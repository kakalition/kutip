import NameWithLimitComponent from "../../../common-component/NameWithLimitComponent";

export default function HomeHeaderComponent(props) {
    return (
        <div className="flex flex-row items-center justify-between">
            <p className="font-playfair-display text-[calc(1rem+2vw)] font-semibold text-secondary
            lg:text-[calc(1rem+1vw)]">
                Kutip
            </p>

            <div className="flex flex-row items-center">
                <p className="font-playfair-display text-[calc(1rem+2vw)] font-semibold text-secondary
                lg:text-[calc(1rem+1vw)]  pb-1">
                    {props.username}
                </p>

                <div className="w-[3vw] md:w-[2vw] lg:w-[1vw]" />

                <button type="button" onClick={props.logoutCallback}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[6vw] w-[6vw] stroke-secondary
                        md:h-[4vw] md:w-[4vw]
                        lg:h-[2vw] lg:w-[2vw]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
