export function CommonInputBuilder(type, id, label, placeholder) {
    return (
        <>
            <label className="form-label" htmlFor={id} >{label}</label><br></br>
            <div className="h-2"></div>
            <input className="form-input bg-form-bg" type={type} id={id} name={id} placeholder={placeholder} required></input><br></br>
        </>
    );
}