import { useDispatch } from "react-redux";
import { randomize } from "../data/ColorSlice";

export default function ChangeColorFabComponent(props) {
    const dispatch = useDispatch();

    function randomizeColor() {
        dispatch(randomize());
    }

    return (
        <button
            className="h-28 w-28 hover:scale-[1.05] hover:-translate-y-2 hover:shadow-2xl transition-all rounded-full flex items-center justify-center bg-[#8D1747] shadow-l"
            onClick={randomizeColor}
            type="button"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 fill-white"
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
