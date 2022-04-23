import VSpacer from '../../../utils/VSpacer';

export default function QuoteComponent(props) {
    // Local State
    const [originalQuoteList, setOriginalQuoteList] = useState(
        JSON.parse(props.quotes).map((quote) => quote.replace(/[~]/g, " "))
    )

    // Redux State
    const color = useSelector((state) => state.color.value)
    const quotes = useSelector((state) => state.quote.value);

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
