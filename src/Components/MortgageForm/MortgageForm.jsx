import "./MortgageForm.css"

function MortgageForm(){
    return(
        <>
            <form className="mForm">
                <label className="input-container">
                    {/*
                    <span className="currency">€</span>
                    */}
                    <span className="input-text">Mortgage amount</span>
                    <div className="inputBody">
                        <input type="number" placeholder="300000" className="formInput"/>
                    </div>
                </label>
                <label className="input-container">
                    <span className="input-text">Enter Credit card</span>
                    <input type="text" className="formInput"/>
                </label>
            </form>
        </>
    )
}

export default MortgageForm