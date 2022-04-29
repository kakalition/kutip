/**
 * @param {Object} props.colorPalette
 * @callback props.changeQuoteCallback
 */
export default function NextButtonComponent(props) {
    return (
        <div
            className="flex h-[calc(4rem+1vw)] w-[calc(4rem+1vw)] items-center justify-center rounded-full border-[3px] transition-all hover:translate-x-2 hover:scale-[1.02] md:h-[calc(4rem+3vw)] md:w-[calc(4rem+3vw)] lg:border-4 lg:hover:translate-x-4"
            style={{ borderColor: props.colorPalette.neutralColor }}
            onClick={props.changeQuoteCallback}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[calc(1rem+3vw)] w-[calc(1rem+3vw)] transition-colors md:h-10 md:w-10"
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
