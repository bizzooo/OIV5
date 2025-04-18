import "./RadioButtonCard.css"
import RadioButton from "./RadioButton/RadioButton"

function RadioButtonCard(){
    return(
        <>
            <div className="RadioCard">
                <div className="RadioCard__Title">
                    <p className="RadioCard__TitleText">Mortgage type</p>
                </div>
                <RadioButton name={"mortgageType"} id={"repayment"} text={"Repayment"}/>
                <RadioButton name={"mortgageType"} id={"interestOnly"} text={"Interest only"}/>
            </div>
        </>
    )
}

export default RadioButtonCard