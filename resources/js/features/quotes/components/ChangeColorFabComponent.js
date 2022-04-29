/**
 * @param {Object} props.colorPalette
 * @callback props.changeColorCallback
 */
export default function ChangeColorFabComponent(props) {
    return (
        <button
            className="shadow-l flex h-[calc(4rem+1vw)] w-[calc(4rem+1vw)] md:h-[calc(4rem+3vw)] md:w-[calc(4rem+3vw)] items-center justify-center rounded-full transition-all hover:-translate-y-2 hover:scale-[1.05] hover:shadow-2xl"
            style={{ backgroundColor: props.colorPalette.fabColor }}
            onClick={props.changeColorCallback}
            type="button"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[calc(1rem+3vw)] w-[calc(1rem+3vw)] md:h-10 md:w-10 transition-colors"
                style={{
                    stroke: props.colorPalette.neutralColor,
                    fill: props.colorPalette.neutralColor,
                }}
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
                    clipRule="evenodd"
                />
            </svg>
        </button>
    );
}
