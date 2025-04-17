import "./SmallFormInputCard.css"
import SmallFormInput from "./SmallFormInput/SmallFormInput"

function SmallFormInputCard(){
    return(
        <>
            <div className="sf-input-card">
                <SmallFormInput header_text={"Mortgage Term"} input_type={"number"} size={7.5} suffix={"Years"} suffixWidth={123}/>
                <SmallFormInput header_text={"Interest Rate"} input_type={"number"} size={7.5} suffix={"asdadaddad"} suffixWidth={4}/>
            </div>
        </>
    )
}

export default SmallFormInputCard