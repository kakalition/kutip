import { useSelector } from "react-redux";
import NameWithLimitComponent from "../../../common-component/NameWithLimitComponent";

export default function QuotesHeaderComponent(props) {
    const color = useSelector((state) => state.color.value);

    return (
        <div className="flex flex-row items-center justify-between pl-8 pr-12 py-6">
            <div className="flex flex-row items-center">
                <svg
                    onClick={props.onBackClicked}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    style={{ stroke: color.neutralColor }}
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
                <div className="w-10" />
                <p
                    className="font-playfair-display font-semibold text-white text-4xl"
                    style={{ color: color.neutralColor }}
                >
                    {props.author}
                </p>
            </div>
            <NameWithLimitComponent />
        </div>
    );
}
