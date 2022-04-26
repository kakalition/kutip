export default function ArrowFabComponent(props) {
    return (
        <button
            className="h-36 w-36 hover:scale-[1.08] hover:-translate-y-3 hover:shadow-2xl transition-all rounded-full flex items-center justify-center bg-[#8D1747] shadow-l"
            type="button"
            onClick={props.toTopCallback}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 stroke-white "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.9}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
            </svg>
        </button>
    );
}
