export default function VSpacer(props) {
    const vClass = "h-[" + props.size + "rem]";
    return (
        <div className={vClass}></div>
    );
}