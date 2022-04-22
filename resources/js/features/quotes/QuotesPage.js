import ElementBinder from '../../utils/ElementBinder'
import VSpacer from '../../utils/VSpacer';
import QuotesHeaderComponent from './components/QuotesHeaderComponent';

function NextIconComponent(props) {
    return (
        <div className="flex items-center justify-center h-28 w-28 border-white border-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </div>
    );
}

function QuoteComponent(props) {
    return (
        <div className="p-28 w-5/6">
            <p className="font-playfair-display font-bold text-[7rem] leading-tight text-[#FFA781] borderize">
                "Whatever can happen at any time can happen today."
            </p>
            <VSpacer size="10"/>
        </div>
    );
}

export default function QuotesPage(props) {
    const parsedQuotes = JSON.parse(props.quotes).map((quote) => quote["quote"].replace(/[-]/g, " "));
    const formattedAuthorName = _.startCase(props.author)

    return (
        <div id="viewport" className="w-screen h-screen flex flex-col bg-[#5B0E2D]">
            <QuotesHeaderComponent author={formattedAuthorName}/>
            <div id="main-content" className="h-full flex flex-row borderize">
                <div className="flex items-center ">
                    <QuoteComponent />
                </div>
                <div id="tool-box" className="flex flex-col items-center justify-center w-1/6 borderize">
                    <div className="">
                        <NextIconComponent/>
                    </div>
                    <div className="absolute bottom-14">
                        <NextIconComponent/>
                    </div>
                </div>
            </div>
        </div>
    );
}

ElementBinder('quotes-root', <QuotesPage/>)
