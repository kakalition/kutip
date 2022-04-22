import ClassNameJoiner from "../utils/ClassNameJoiner";

export default function NameWithLimitComponent(props) {
    let className = "font-poppins";
    const textColor = props.color != null ? "text-" + props.color : "text-secondary"
    className = ClassNameJoiner(className, textColor)

    return (
        <div className="flex flex-col">
            <p className={ ClassNameJoiner(className, "text-xl font-regular") }>
                Kharisma Sri Wibowo
            </p>
            <p className={ ClassNameJoiner(className, "text-l font-light") }>
                Daily Limit: 1/10
            </p>
        </div>
    );
}