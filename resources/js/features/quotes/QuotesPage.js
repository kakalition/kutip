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

function ChangeColorComponent(props) {
    return (
        <button
            className="h-28 w-28 hover:scale-[1.08] hover:-translate-y-3 hover:shadow-2xl transition-all rounded-full flex items-center justify-center bg-[#8D1747] shadow-l"
            type="button"
        >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 fill-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
        </svg>
        </button>
    );
}

function QuoteComponent(props) {
    return (
        <div className="p-28 w-5/6">
            <p className="font-playfair-display font-bold text-[7rem] leading-tight text-[#FFA781]">
                "Whatever can happen at any time can happen today."
            </p>
            <VSpacer size="h-[2rem]"/>
        </div>
    );
}

export default function QuotesPage(props) {
    const parsedQuotes = JSON.parse(props.quotes).map((quote) => quote["quote"].replace(/[-]/g, " "));
    const formattedAuthorName = _.startCase(props.author)

    return (
        <div id="viewport" className="w-screen h-screen flex flex-col bg-[#5B0E2D]">
            <QuotesHeaderComponent author={formattedAuthorName}/>
            <div id="main-content" className="h-full flex flex-row">
                <div className="flex items-center ">
                    <QuoteComponent />
                </div>
                <div id="tool-box" className="flex flex-col items-center justify-center w-1/6">
                    <div className="">
                        <NextIconComponent/>
                    </div>
                    <div className="absolute bottom-14">
                        <ChangeColorComponent/>
                    </div>
                </div>
            </div>
        </div>
    );
}

ElementBinder('quotes-root', <QuotesPage/>)
