export default function ArrowFabComponent(props) {
    return (
        <button
            className="shadow-l flex h-[calc(3rem+8vw)] w-[calc(3rem+8vw)] items-center justify-center rounded-full bg-[#8D1747] 
            transition-all hover:-translate-y-3 hover:scale-[1.08] hover:shadow-2xl
            md:h-[calc(3rem+7vw)] md:w-[calc(3rem+7vw)]
            lg:h-[calc(3rem+5vw)] lg:w-[calc(3rem+5vw)]"
            type="button"
            onClick={props.toTopCallback}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[calc(1rem+4vw)] w-[calc(1rem+4vw)] stroke-white 
                md:h-[calc(1rem+3vw)] md:w-[calc(1rem+3vw)]
                lg:h-[calc(1rem+3vw)] lg:w-[calc(1rem+3vw)]"
                
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
