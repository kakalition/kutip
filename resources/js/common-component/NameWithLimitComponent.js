import ClassNameJoiner from "../utils/ClassNameJoiner";

export default function NameWithLimitComponent(props) {
    let className = "font-playfair-display font-semibold text-2xl";
    const textColor = props.color != null ? "text-" + props.color : "text-secondary"
    className = ClassNameJoiner(className, textColor)

    return (
        <div className="flex flex-col">
            <p className={className}>
                Kharisma Sri Wibowo
            </p>
            <p className={className}>
                Daily Limit: 1/10
            </p>
        </div>
    );
}