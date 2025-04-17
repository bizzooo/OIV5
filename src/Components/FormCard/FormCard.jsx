import "./FormCard.css"
import MortgageForm from "../MortgageForm/MortgageForm"

function FormCard(){
    return(
        <>
            <div className="form-container">
                <div className="form">
                    <div className="mortgage-card">
                        <MortgageForm />
                    </div>
                    <div className="results-card">

                    </div>
                </div>
            </div>
        </>
    )
}

export default FormCard