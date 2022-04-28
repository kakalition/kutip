/**
 * @param {Object} props.colorPalette
 * @callback props.changeQuoteCallback
 */
export default function NextButtonComponent(props) {
    return (
        <div
            className="flex h-[calc(4rem+3vw)] w-[calc(4rem+3vw)] items-center justify-center rounded-full border-[3px] lg:border-4 transition-all lg:hover:translate-x-4 hover:translate-x-2 hover:scale-[1.02]"
            style={{ borderColor: props.colorPalette.neutralColor }}
            onClick={props.changeQuoteCallback}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 transition-colors"
                style={{ stroke: props.colorPalette.neutralColor }}
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
