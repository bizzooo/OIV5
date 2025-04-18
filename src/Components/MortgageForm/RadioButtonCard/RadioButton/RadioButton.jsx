import "./RadioButton.css"

function RadioButton( {name, id, text} ){
    return(
        <>
            <label>
                <div className="RadioComponent">
                    <input type="radio" name={name} id={id} /> <p>{text}</p>
                </div>
            </label>
        </>
    )
}

export default RadioButton