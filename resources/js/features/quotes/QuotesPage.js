import _ from "lodash";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ElementBinder from "../../utils/ElementBinder";
import ChangeColorFabComponent from "./components/ChangeColorFabComponent";
import NextButtonComponent from "./components/NextButtonComponent";
import QuoteComponent from "./components/QuoteComponent";
import QuotesHeaderComponent from "./components/QuotesHeaderComponent";
import { colorArray } from "./data/ColorArray";
import { randomize } from "./data/ColorSlice";
import { setQuote } from "./data/QuoteSlice";

export default function QuotesPage(props) {
    // Property
    const authorName = _.startCase(props.author);

    // Local State
    const [originalList, setOriginalList] = useState([]);
    const [availableQuote, setAvailableQuote] = useState([]);
    const [currentQuote, setCurrentQuote] = useState("");
    const [currentColor, setCurrentColor] = useState(colorArray[0]);

    // UseEffect
    useEffect(() => {
        setOriginalList(
            JSON.parse(props.quotes).map((quote) => quote.replace(/[~]/g, " "))
        );
        setAvailableQuote([...originalList]);
    }, [props.quotes]);

    function changeQuote() {
        if (availableQuote.length === 0) {
            setAvailableQuote(originalQuoteList);
        }
        const randomIndex = _.random(0, availableQuote.length - 1, false);
        const pickedQuote = availableQuote[randomIndex];
        setAvailableQuote(
            availableQuote.filter((element) => element != pickedQuote)
        );
        setCurrentQuote(pickedQuote);
    }

    function changeColorPalette() {
        let localColor = { ...currentColor };
        while (localColor.bgColor == currentColor.bgColor) {
            const randomIndex = _.random(0, colorArray.length - 1, false);
            localColor = colorArray[randomIndex];
        }
        setCurrentColor(localColor);
    }

    function onBackClicked() {
        window.location.href = "/quotes";
    }

    return (
        <div
            id="viewport"
            className="flex h-screen w-screen flex-col transition-colors"
            style={{ backgroundColor: color.bgColor }}
        >
            <QuotesHeaderComponent
                authorName={authorName}
                onBackClicked={onBackClicked}
                colorPalette={currentColor}
            />
            <div
                id="main-content"
                className="flex h-full flex-col py-[8vw] lg:flex-row lg:py-0 lg:px-[3vw]"
            >
                <div className="flex h-full w-full items-center px-[5vw] ">
                    <QuoteComponent currentColor={currentColor} />
                </div>

                <div className="flex flex-row items-center justify-center justify-self-end lg:flex-col">
                    <div className="">
                        <NextButtonComponent
                            callback={changeQuote}
                            currentColor={currentColor}
                        />
                    </div>

                    <div className="w-[5vw] lg:h-[3vw]" />

                    <div className="">
                        <ChangeColorFabComponent currentColor={currentColor} />
                    </div>
                </div>
            </div>
        </div>
    );
}

ElementBinder("quotes-root", <QuotesPage />);
