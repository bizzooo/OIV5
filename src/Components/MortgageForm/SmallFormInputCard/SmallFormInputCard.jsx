import "./SmallFormInputCard.css"
import SmallFormInput from "./SmallFormInput/SmallFormInput"

function SmallFormInputCard(){
    return(
        <>
            <div className="sf-input-card">
                <SmallFormInput header_text={"Mortgage Term"} input_type={"number"} size={7.5} suffix={"years"} suffixWidth={"4rem"}/>
                <SmallFormInput header_text={"Interest Rate"} input_type={"number"} size={7.5} suffix={"%"} suffixWidth={"3rem"}/>
            </div>
        </>
    )
}

export default SmallFormInputCard