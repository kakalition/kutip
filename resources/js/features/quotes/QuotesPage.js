import ReactDOM from 'react-dom';
import NameWithLimitComponent from '../../common-component/NameWithLimitComponent';
import ElementBinder from '../../utils/ElementBinder'

function QuotesHeader(props) {
    return (
        <div className="flex flex-row items-center justify-between px-8 py-6">
            <div className="flex flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <div className="w-10" />
                <p className="font-playfair-display font-semibold text-secondary text-4xl">
                    Kutip
                </p>
            </div>
            <NameWithLimitComponent color="sky-500"/>
        </div>
    );
}

export default function QuotesPage(props) {
    const parsedQuotes = JSON.parse(props.quotes).map((quote) => quote["quote"].replace(/[-]/g, " "));

    return (
        <div className="w-screen min-h-screen bg-[#5B0E2D]">
            <QuotesHeader/>
        </div>
    );
}

ElementBinder('quotes-root', <QuotesPage/>)
