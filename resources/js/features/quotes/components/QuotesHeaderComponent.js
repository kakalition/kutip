import { useSelector } from "react-redux";
import NameWithLimitComponent from "../../../common-component/NameWithLimitComponent";

/**
 * Description
 * @param {string} props.authorName
 * @param {string} props.onBackClicked
 * @param {string} props.colorPalette
 */
export default function QuotesHeaderComponent(props) {
    return (
        <div className="flex flex-row items-center justify-between p-6">
            <div className="flex flex-row items-center">
                <button
                    type="button"
                    onClick={props.onBackClicked}
                    className="p-2 transition-transform hover:-translate-x-3"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[calc(1rem+2vw)] w-[calc(1rem+2vw)]"
                        style={{ stroke: props.colorPalette.neutralColor }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                </button>
                <div className="w-[2vw] lg:w-[1vw]" />
                <p
                    className="pb-1 font-playfair-display text-[calc(1rem+2vw)] font-semibold text-white lg:text-[calc(1.5rem+1vw)]"
                    style={{ color: props.colorPalette.neutralColor }}
                >
                    {props.authorName}
                </p>
            </div>

            <NameWithLimitComponent />
        </div>
    );
}
