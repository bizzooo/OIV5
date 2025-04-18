import "./RadioButtonCard.css"
import RadioButton from "./RadioButton/RadioButton"

function RadioButtonCard(){
    return(
        <>
            <div className="RadioCard">
                <div className="RadioCard__Title">
                    <p>Mortgage type</p>
                </div>
                <RadioButton />
                <RadioButton />
            </div>
        </>
    )
}

export default RadioButtonCard