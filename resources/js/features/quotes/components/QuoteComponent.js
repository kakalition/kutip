import VSpacer from "../../../utils/VSpacer";

/**
 * @param {string} props.quote
 * @param {Object} props.colorPalette
 */
export default function QuoteComponent(props) {
    return (
        <div className="">
            <p
                id="quote"
                className="text-center font-playfair-display text-[calc(2rem+2vw)] font-bold leading-tight text-[#FFA781]
                md:text-left md:text-[calc(2rem+4vw)]
                lg:text-[calc(3rem+4vw)]"
                style={{ color: props.colorPalette.primaryColor }}
            >
                {props.quote}
                <span className="animate-typewriter" id="type-cursor">
                    |
                </span>
            </p>
            <VSpacer size="h-[2rem]" />
        </div>
    );
}
