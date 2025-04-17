import "./MortgageForm.css"
import FormInputCard from "./FormInputCard/FormInputCard"
import SmallFormInputCard from "./SmallFormInputCard/SmallFormInputCard";

function MortgageForm(){
    return(
        <>
            <form className="mForm">
                <FormInputCard />
                <SmallFormInputCard />  
            </form>
        </>
    )
}

export default MortgageForm