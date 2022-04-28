import { useDispatch, useSelector } from "react-redux";
import VSpacer from "../../../utils/VSpacer";
import store from "../../../store";
import { useState } from "react";

export default function QuoteComponent(props) {

    // Redux State
    const color = useSelector((state) => state.color.value);
    const quote = useSelector((state) => state.quote.value);

    const [num, setnum] = useState(0)

    return (
        <div className="">
            <p
                id="quote"
                className="font-playfair-display font-bold text-[calc(2rem+2vw)] leading-tight text-[#FFA781] text-center
                md:text-[calc(2rem+4vw)] md:text-left
                lg:text-[calc(3rem+4vw)]"
                style={{ color: color.primaryColor }}
            >
                {quote}<span className="animate-typewriter" id="type-cursor">|</span>
            </p>
            <VSpacer size="h-[2rem]" />
        </div>
    );
}
