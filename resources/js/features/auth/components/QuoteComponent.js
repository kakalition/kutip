export default function QuoteComponent(props) {
    return (
        <div className="flex flex-col items-start">
            <p className="font-playfair-display text-[calc(2rem+2vw)] font-semibold leading-tight text-primary">
                “Quickness is the essence of the war.”
            </p>
            <div className="h-8" />
            <p className="font-playfair-display text-4xl font-bold text-primary">
                Sun Tzu
            </p>
        </div>
    );
}
