import _ from "lodash";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ElementBinder from "../../utils/ElementBinder";
import ChangeColorFabComponent from "./components/ChangeColorFabComponent";
import NextButtonComponent from "./components/NextButtonComponent";
import QuoteComponent from "./components/QuoteComponent";
import QuotesHeaderComponent from "./components/QuotesHeaderComponent";
import { randomize } from "./data/ColorSlice";
import { setQuote } from "./data/QuoteSlice";

export default function QuotesPage(props) {
    // Property
    const dispatch = useDispatch();
    const formattedAuthorName = _.startCase(props.author);

    // Local State
    const [isInitialState, setInitialState] = useState(true);
    const originalQuoteList = useMemo(
        () =>
            JSON.parse(props.quotes).map((quote) => quote.replace(/[~]/g, " ")),
        [props.quotes]
    );
    let [availableQuote, setAvailableQuote] = useState([...originalQuoteList]);

    // ReduxState
    const color = useSelector((state) => state.color.value);

    function changeQuote() {
        if (availableQuote.length === 0) {
            availableQuote = originalQuoteList;
        }
        const randomIndex = _.random(0, availableQuote.length - 1, false);
        const pickedQuote = availableQuote[randomIndex];
        setAvailableQuote(
            availableQuote.filter((element) => element != pickedQuote)
        );
        dispatch(setQuote(pickedQuote));
    }

    function onBackClicked() {
        window.location.href = "/quotes";
    }

    // Initial Random
    if (isInitialState) {
        dispatch(randomize());
        changeQuote();
        setInitialState(false);
    }

    return (
        <div
            id="viewport"
            className="flex h-screen w-screen flex-col transition-colors"
            style={{ backgroundColor: color.bgColor }}
        >
            <QuotesHeaderComponent
                author={formattedAuthorName}
                onBackClicked={onBackClicked}
            />
            <div
                id="main-content"
                className="flex h-full flex-col py-[8vw] lg:flex-row lg:py-0 lg:px-[3vw]"
            >
                <div
                    className="flex h-full w-full items-center px-[5vw] "
                >
                    <QuoteComponent />
                </div>

                <div className="flex flex-row items-center justify-center justify-self-end lg:flex-col">
                    <div className="">
                        <NextButtonComponent callback={changeQuote} />
                    </div>

                    <div className="w-[5vw] lg:h-[3vw]" />

                    <div className="">
                        <ChangeColorFabComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

ElementBinder("quotes-root", <QuotesPage />);
