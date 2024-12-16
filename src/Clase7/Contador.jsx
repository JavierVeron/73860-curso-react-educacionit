import { useEffect, useState } from "react";
import { createStore } from "redux";

// Vamos a definir el Reducer
const Counter = (estado = 0, accion) => {
    switch(accion.type) {
        case "INCREMENTAR":            
            return estado + 1;
        case "DECREMENTAR":
            return estado - 1;
        default:
            return estado;
    }
}

// Creamos el Store de nuestro Redux
const store = createStore(Counter);

const Contador = () => {
    const [contador, setContador] = useState(0);

    /* useEffect(() => {
        store.dispatch({type:"INCREMENTAR"});
        store.dispatch({type:"INCREMENTAR"});
        store.dispatch({type:"INCREMENTAR"});
        store.dispatch({type:"DECREMENTAR"});
        setContador(store.getState())
    }, []) */

    const incrementar = () => {
        store.dispatch({type:"INCREMENTAR"});
        setContador(store.getState());
    }

    const decrementar = () => {
        store.dispatch({type:"DECREMENTAR"});
        setContador(store.getState());
    }

    // Utilizo subscribe (para escuchar las acciones que se disparan)
    store.subscribe(() => {
        console.log("Se realizó una acción!");
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Contador (Redux)</h1>
                    <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary" onClick={decrementar}>-</button>
                    <button type="button" className="btn btn-primary">{contador}</button>
                    <button type="button" className="btn btn-primary" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contador