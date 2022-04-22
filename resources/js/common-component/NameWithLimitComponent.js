import { useSelector } from "react-redux";
import ClassNameJoiner from "../utils/ClassNameJoiner";

export default function NameWithLimitComponent(props) {
    const color = useSelector((state) => state.color.value);

    let className = "font-poppins";

    return (
        <div className="flex flex-col">
            <p
                className={ClassNameJoiner(className, "text-xl font-regular")}
                style={{ color: color.neutralColor }}
            >
                Kharisma Sri Wibowo
            </p>
            <p
                className={ClassNameJoiner(className, "text-l font-light")}
                style={{ color: color.neutralColor }}
            >
                Daily Limit: 1/10
            </p>
        </div>
    );
}
