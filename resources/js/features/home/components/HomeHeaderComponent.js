import NameWithLimitComponent from "../../../common-component/NameWithLimitComponent";

export default function HomeHeaderComponent(props) {
    return (
        <div className="flex flex-row items-center justify-between px-8 py-6">
            <p className="font-playfair-display font-semibold text-secondary text-4xl">
                Kutip
            </p>
            <div onClick={props.logoutCallback}>
                <NameWithLimitComponent />
            </div>
        </div>
    );
}