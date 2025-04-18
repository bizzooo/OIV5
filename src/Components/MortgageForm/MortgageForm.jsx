import "./MortgageForm.css"
import FormInputCard from "./FormInputCard/FormInputCard"
import SmallFormInputCard from "./SmallFormInputCard/SmallFormInputCard";
import RadioButtonCard from "./RadioButtonCard/RadioButtonCard";
import CalculateButton from "./CalculateButton/CalculateButton";

function MortgageForm(){
    return(
        <>
            <form className="mForm">
                <FormInputCard />
                <SmallFormInputCard />  
                <RadioButtonCard />
                <CalculateButton />
            </form>
        </>
    )
}

export default MortgageForm