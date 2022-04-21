export default function HomeHeaderComponent(props) {
    return (
        <div className="flex flex-row items-center justify-between px-8 py-6">
            <p className="font-playfair-display font-semibold text-secondary text-4xl">
                Kutip
            </p>
            <div className="flex flex-col">
                <p className="font-playfair-display font-semibold text-secondary text-2xl">
                    Kharisma Sri Wibowo
                </p>
                <p className="font-playfair-display font-semibold text-secondary text-xl">
                    Daily Limit: 1/10
                </p>
            </div>
        </div>
    );
}