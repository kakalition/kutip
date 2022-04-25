import _ from 'lodash';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ElementBinder from '../../utils/ElementBinder'
import ChangeColorFabComponent from './components/ChangeColorFabComponent';
import NextButtonComponent from './components/NextButtonComponent';
import QuoteComponent from './components/QuoteComponent';
import QuotesHeaderComponent from './components/QuotesHeaderComponent';
import { randomize } from './data/ColorSlice';
import { setQuote } from './data/QuoteSlice';

export default function QuotesPage(props) {

    // Property
    const dispatch = useDispatch();
    const formattedAuthorName = _.startCase(props.author)

    // Local State
    const [isInitialState, setInitialState] = useState(true);
    const originalQuoteList = useMemo(() =>
        JSON.parse(props.quotes).map((quote) => quote.replace(/[~]/g, " "))
    , [props.quotes]);
    let [availableQuote, setAvailableQuote] = useState([...originalQuoteList]);

    // ReduxState
    const color = useSelector((state) => state.color.value);

    function changeQuote() {
        console.log(availableQuote.length);
        if (availableQuote.length === 0) {
            availableQuote = originalQuoteList;
        }
        const randomIndex = _.random(0, availableQuote.length - 1, false)
        const pickedQuote = availableQuote[randomIndex];
        setAvailableQuote(availableQuote.filter((element) => element != pickedQuote));
        dispatch(setQuote(pickedQuote));
    }

    // Initial Random
    if (isInitialState) {
        dispatch(randomize());
        changeQuote()
        setInitialState(false);
    }

    return (
        <div 
            id="viewport" 
            className="w-screen h-screen flex flex-col transition-colors"
            style={{backgroundColor: color.bgColor}}>
            <QuotesHeaderComponent author={formattedAuthorName}/>
            <div id="main-content" className="h-full flex flex-row">
                <div className="flex items-center ">
                    <QuoteComponent />
                </div>
                <div id="tool-box" className="flex flex-col items-center justify-center w-1/6 mr-6">
                    <div className="">
                        <NextButtonComponent callback={changeQuote}/>
                    </div>
                    <div className="absolute bottom-14">
                        <ChangeColorFabComponent/>
                    </div>
                </div>
            </div>
        </div>
    );
}

ElementBinder('quotes-root', <QuotesPage/>)
