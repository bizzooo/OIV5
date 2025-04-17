import "./MortgageForm.css"
import FormInput from "./FormInput/FormInput"
import SmallFormInputCard from "./SmallFormInputCard/SmallFormInputCard";

function MortgageForm(){
    return(
        <>
            <form className="mForm">
                <FormInput header_text={"Mortgage Amount"} input_type={"number"} size={15}/>
                <FormInput header_text={"Enter Credit Card"} input_type={"number"} size={15}/>
                <SmallFormInputCard />
            </form>
        </>
    )
}

export default MortgageForm