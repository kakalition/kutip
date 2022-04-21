import ReactDOM from 'react-dom';
import ElementBinder from '../../utils/ElementBinder'

export default function QuotesPage(props) {
    const parsedQuotes = JSON.parse(props.quotes).map((quote) => quote["quote"].replace(/[-]/g, " "));

    return (
        <>
        </>
    );
}

ElementBinder('quotes-root', <QuotesPage/>)
