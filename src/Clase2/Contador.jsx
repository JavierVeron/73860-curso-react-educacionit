import { useState } from "react"

const Contador = ({inicio, fin}) => {
    const [counter, setCounter] = useState(inicioss);

    const decrementar = () => {
        if (counter > inicio) {
            setCounter(counter - 1);
        }
    }

    const incrementar = () => {
        if (counter < fin) {
            setCounter(counter + 1);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Contador</h1>
                    <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary" onClick={decrementar}> - </button>
                    <button type="button" className="btn btn-primary">{counter}</button>
                    <button type="button" className="btn btn-primary" onClick={incrementar}> + </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contador