import { useSelector } from "react-redux";

export default function NextButtonComponent(props) {
    const color = useSelector((state) => state.color.value);

    return (
        <div
            className="flex items-center justify-center h-28 w-28 border-4 rounded-full hover:scale-[1.02] hover:translate-x-4 transition-all"
            style={{ borderColor: color.neutralColor}}
            onClick={props.callback}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 transition-colors"
                style={{ stroke: color.neutralColor }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
            </svg>
        </div>
    );
}
