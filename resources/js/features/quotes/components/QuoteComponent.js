import VSpacer from "../../../utils/VSpacer";
import { useState, useEffect } from "react";

/**
 * @param {string} props.quote
 * @param {Object} props.colorPalette
 */
export default function QuoteComponent(props) {
    // Property
    const TYPE_CONSTANT = 40;
    const DELETE_CONSTANT = 15;

    // Local State
    const [text, setText] = useState("");
    const [fullText, setFullText] = useState("");
    const [index, setIndex] = useState(0);

    // UseEffect
    useEffect(() => {
        setFullText(props.quote);
    }, [props.quote]);

    useEffect(() => {
        if (text.length < fullText.length) fill();
        else unfill();
    }, [index, fullText]);

    // Local Function
    function fill() {
        if (index < fullText.length) {
            setTimeout(() => {
                setText(text + fullText[index]);
                setIndex(index + 1);
            }, TYPE_CONSTANT);
        }
    }

    function unfill() {
        if (index > fullText.length) {
            setTimeout(() => {
                setText(text.substring(0, text.length - 1));
                setIndex(index - 1);
            }, DELETE_CONSTANT);
        }
    }

    return (
        <div className="">
            <p
                id="quote"
                className="text-center font-playfair-display text-[calc(2rem+2vw)] font-bold leading-tight text-[#FFA781]
                md:text-left md:text-[calc(2rem+4vw)]
                lg:text-[calc(3rem+4vw)]"
                style={{ color: props.colorPalette.primaryColor }}
            >
                {text}
                <span className="animate-typewriter" id="type-cursor">
                    |
                </span>
            </p>
            <VSpacer size="h-[2rem]" />
        </div>
    );
}
