export default function NextButtonComponent(props) {
    return (
        <div className="flex items-center justify-center h-28 w-28 border-white border-4 rounded-full hover:scale-[1.02] hover:translate-x-2 transition-all">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 stroke-white"
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
