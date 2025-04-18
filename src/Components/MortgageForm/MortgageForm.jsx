import "./MortgageForm.css"
import FormInputCard from "./FormInputCard/FormInputCard"
import SmallFormInputCard from "./SmallFormInputCard/SmallFormInputCard";
import RadioButtonCard from "./RadioButtonCard/RadioButtonCard";

function MortgageForm(){
    return(
        <>
            <form className="mForm">
                <FormInputCard />
                <SmallFormInputCard />  
                <RadioButtonCard />
            </form>
        </>
    )
}

export default MortgageForm