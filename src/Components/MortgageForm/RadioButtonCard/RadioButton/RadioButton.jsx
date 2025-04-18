import "./RadioButton.css"

function RadioButton( {type} ){
    return(
        <>
            <label>
                <div className="RadioComponent">
                    <input type="radio" id={type} />
                </div>
            </label>
        </>
    )
}

export default RadioButton