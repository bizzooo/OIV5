import "./SmallFormInput.css"

function SmallFormInput({
    header_text,
    input_type,
    size,
    suffix ,
    suffixWidth 
}){
    //Converts int to width: css style using rem
    const style = {
        width: typeof size === "number" ? `${size}rem` : size
    };

    const cssVars = {
    "--suffix-content": `"${suffix}"`,
    "--suffix-width": suffixWidth,
    };

    return(
        <>
            <label className="sf-container">
                <span className="input-text">{header_text}</span>
                <div className="sf-inputBody" style={cssVars} >
                    <input type={input_type} className="sf-formInput" placeholder="0"  style={style}/>
                </div>
            </label>
        </>
    )
}

export default SmallFormInput