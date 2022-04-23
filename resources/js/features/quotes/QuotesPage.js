import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ElementBinder from '../../utils/ElementBinder'
import VSpacer from '../../utils/VSpacer';
import ChangeColorFabComponent from './components/ChangeColorFabComponent';
import NextButtonComponent from './components/NextButtonComponent';
import QuotesHeaderComponent from './components/QuotesHeaderComponent';
import { randomize } from './data/ColorSlice';

function QuoteComponent(props) {
    const color = useSelector((state) => state.color.value)

    return (
        <div className="p-28 w-5/6">
            <p 
                className="font-playfair-display font-bold text-[7rem] leading-tight text-[#FFA781]"
                style={{ color: color.primaryColor }}>
                "Whatever can happen at any time can happen today."
            </p>
            <VSpacer size="h-[2rem]"/>
        </div>
    );
}

export default function QuotesPage(props) {
    const [randomApplied, setRandomApplied] = useState(false);
    const color = useSelector((state) => state.color.value)

    const parsedQuotes = JSON.parse(props.quotes).map((quote) => quote.replace(/[~]/g, " "));
    const formattedAuthorName = _.startCase(props.author)

    // Initial Random
    if (randomApplied == false) {
        useDispatch()(randomize())
        setRandomApplied(true)
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
                        <NextButtonComponent />
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
