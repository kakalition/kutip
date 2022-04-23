import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ElementBinder from '../../utils/ElementBinder'
import ChangeColorFabComponent from './components/ChangeColorFabComponent';
import NextButtonComponent from './components/NextButtonComponent';
import QuoteComponent from './components/QuoteComponent';
import QuotesHeaderComponent from './components/QuotesHeaderComponent';
import { randomize } from './data/ColorSlice';

export default function QuotesPage(props) {
    // Local State
    const [isRandomApplied, setRandomApplied] = useState(false);

    // ReduxState
    const color = useSelector((state) => state.color.value);

    // Property
    const formattedAuthorName = _.startCase(props.author)

    // Initial Random
    if (isRandomApplied == false) {
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
                    <QuoteComponent quotes={props.quotes} />
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
