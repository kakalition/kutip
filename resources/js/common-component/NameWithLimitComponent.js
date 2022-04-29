import ClassNameJoiner from "../utils/ClassNameJoiner";

export default function NameWithLimitComponent(props) {

    let className = "font-poppins";

    return (
        <div className="flex flex-col">
            <p
                className={ClassNameJoiner(
                    className,
                    "font-regular text-[calc(0.75rem+0.5vw)]"
                )}
                style={{ color: props.colorPalette.neutralColor }}
            >
                Kharisma Sri Wibowo
            </p>
            <p
                className={ClassNameJoiner(className, "text-[calc(0.6rem+0.5vw)] font-light")}
                style={{ color: props.colorPalette.neutralColor }}
            >
                Daily Limit: 1/10
            </p>
        </div>
    );
}
