import "./FormInputCard.css"
import FormInput from "./FormInput/FormInput"

function FormInputCard(){
    return(
        <>
            <div className="CardComponent">
                <div className="CardComponent__Heading">
                    <div className="CardComponent__Title">
                        <h1>Mortgage Calculator</h1>
                    </div>
                    <div className="CardComponent__ClearAll">
                        <h3>Clear all</h3>
                    </div>
                </div>
                <div className="CardComponent__Form">
                    <FormInput header_text={"Mortgage Amount"} input_type={"number"} size={15}/>
                    <FormInput header_text={"Enter Credit Card"} input_type={"number"} size={15}/>
                </div>
            </div>
        </>
    )
}

export default FormInputCard