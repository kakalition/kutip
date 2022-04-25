import { useDispatch, useSelector } from "react-redux";
import VSpacer from "../../../utils/VSpacer";

export default function QuoteComponent(props) {

    // Redux State
    const color = useSelector((state) => state.color.value);
    const quote = useSelector((state) => state.quote.value);

    return (
        <div className="p-28 w-5/6">
            <p
                className="font-playfair-display font-bold text-[7rem] leading-tight text-[#FFA781]"
                style={{ color: color.primaryColor }}
            >
                {quote}
            </p>
            <VSpacer size="h-[2rem]" />
        </div>
    );
}
