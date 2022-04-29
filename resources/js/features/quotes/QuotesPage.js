import _ from "lodash";
import { useEffect, useMemo, useState } from "react";
import ElementBinder from "../../utils/ElementBinder";
import ChangeColorFabComponent from "./components/ChangeColorFabComponent";
import NextButtonComponent from "./components/NextButtonComponent";
import QuoteComponent from "./components/QuoteComponent";
import QuotesHeaderComponent from "./components/QuotesHeaderComponent";
import { colorArray } from "./data/ColorArray";

export default function QuotesPage(props) {
    // Property
    const authorName = _.startCase(props.author);
    const WAIT_CONSTANT = 20;

    // Local State
    const [originalList, setOriginalList] = useState([]);
    const [availableQuote, setAvailableQuote] = useState([]);
    const [currentQuote, setCurrentQuote] = useState("");
    const [currentColor, setCurrentColor] = useState(colorArray[0]);

    // UseEffect
    useEffect(() => {
        const mapped = JSON.parse(props.quotes).map((quote) =>
            quote.replace(/[~]/g, " ")
        );
        setOriginalList([...mapped]);
        setCurrentQuote(mapped[0]);
        setTimeout(() => {}, 2000);
    }, []);

    function changeQuote() {
        let batchHolder = [...availableQuote];

        if (batchHolder.length == 0) {
            batchHolder = [...originalList];
        }

        const randomIndex = _.random(0, batchHolder.length - 1, false);
        const pickedQuote = batchHolder[randomIndex];
        batchHolder = batchHolder.filter((element) => element != pickedQuote);

        const duration = currentQuote.length * WAIT_CONSTANT;
        setCurrentQuote("");
        setTimeout(() => {
            setCurrentQuote(pickedQuote);
        }, duration);

        setAvailableQuote(batchHolder);
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
            style={{ backgroundColor: currentColor.bgColor }}
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
                    <QuoteComponent
                        quote={currentQuote}
                        colorPalette={currentColor}
                    />
                </div>

                <div className="flex flex-row items-center justify-center justify-self-end lg:flex-col">
                    <div className="">
                        <NextButtonComponent
                            colorPalette={currentColor}
                            changeQuoteCallback={changeQuote}
                        />
                    </div>

                    <div className="w-[5vw] lg:h-[3vw]" />

                    <div className="">
                        <ChangeColorFabComponent
                            colorPalette={currentColor}
                            changeColorCallback={changeColorPalette}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

ElementBinder("quotes-root", <QuotesPage />);
