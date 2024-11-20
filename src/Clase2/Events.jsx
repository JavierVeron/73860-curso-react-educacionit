import { useState } from "react";

const Titulo = ({texto}) => {
    return (
        <p className="text-primary display-3">{texto}</p>
    )
}

const Events = () => {
    const mostrarMensaje = () => {
        alert("Hola a Todos!");
    }

    const [texto, setTexto] = useState("");
    const [operador, setOperador] = useState("Ninguno");

    const modificarTexto = (e) => {
        setTexto(e.target.value);
    }

    const operadorSeleccionado = (e) => {
        setOperador(e.target.value);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Eventos</h1>
                    <h3>Evento Click</h3>
                    <p><button className="btn btn-primary" onClick={mostrarMensaje}>Hacer Click!</button></p>
                    <h3>Evento onInput</h3>
                    {/* <p><input type="text" className="form-control" onInput={modificarTexto} /></p> */}
                    <p><input type="text" className="form-control" onInput={(e) => {setTexto(e.target.value)}} /></p>
                    <p>{texto}</p>
                    <Titulo texto={texto} />
                    <h3>Evento onChange</h3>
                    <select className="form-control" onChange={operadorSeleccionado}>
                        <option value="Claro">Claro</option>
                        <option value="Movistar">Movistar</option>
                        <option value="Personal">Personal</option>
                    </select>
                    <p>Operador Seleccionado: <b>{operador}</b></p>
                </div>
            </div>
        </div>
    )
}

export default Events;