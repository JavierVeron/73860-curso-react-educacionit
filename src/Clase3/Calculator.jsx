import { useState } from "react"
import CurrencyField from "./CurrencyField"

const Calculator = () => {
    const [valor, setValor] = useState(0);
    const [divisa, setDivisa] = useState("");
    const cambio = 1200;

    const handleARSChange = (valor) => {
        setValor(valor);
        setDivisa("ARS");
    }

    const handleUSDChange = (valor) => {
        setValor(valor);
        setDivisa("USD");
    }

    const arsValue = divisa === "USD" ? valor * cambio : valor;
    const usdValue = divisa === "ARS" ? valor / cambio : valor;

    return (
        <div className="container my-5">
            <dir className="row">
                <div className="col-md-6">
                    <h1>Calculadora</h1>
                    <CurrencyField divisa={"ARS"} valor={arsValue} onChange={handleARSChange} />
                    <CurrencyField divisa={"USD"} valor={usdValue} onChange={handleUSDChange} />
                </div>
            </dir>
        </div>
    )
}

export default Calculator