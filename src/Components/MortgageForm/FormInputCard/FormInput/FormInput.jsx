import "./FormInput.css"

function FormInput({header_text, input_type, size}){

    //Converts int to width: css style using rem
    const style = {
        width: typeof size === "number" ? `${size}rem` : size
    };

    return (
        <>
            <label className="input-container">
                <span className="input-text">{header_text}</span>
                <div className="inputBody">
                    <input type={input_type} placeholder="300000" className="formInput" style={style}/>
                </div>
            </label>
        </>
    )
}

export default FormInput