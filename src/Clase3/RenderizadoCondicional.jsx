import { useState } from "react";

const RenderizadoCondicional = () => {
    // Ejemplo #1 - Renderizado con Variables (renderizado por única vez)
    let mostrarValor = "";
    let cursandoReact = true;

    /* if (cursandoReact) {
        mostrarValor = "Curso de React JS";
    } else {
        mostrarValor = "Curso de JavaScript"
    } */

    // Ejemplo #2 - Renderizado con Operador && (AND) (Solo se va a ejecutar si el primer operando está verdadero (true))
    function modificarCurso(cursandoReact) {
        if (cursandoReact) {
            mostrarValor = "Curso de React JS";
        } else {
            mostrarValor = "Curso de JavaScript"
        }
    }

    /* cursandoReact && modificarCurso(cursandoReact) */

    // Ejemplo #3 - Renderizado con Estados (renderizado cada cambio de estados)
    mostrarValor = cursandoReact ? "Curso de React JS" : "Curso de JavaScript";

    // Ejemplo #4 - Renderizado de todo un Componente
    if (!cursandoReact) {
        return (
            <div className="container">
                <h1>ERROR! ESTÁS CURSANDO JAVASCRIPT!</h1>
            </div>
        )
    }

    // Ejemplo #5 - Renderizado con Estados
    const [darkMode, setDarkMode] = useState(false)

    const cambiarModo = () => {
        setDarkMode(darkMode ? false : true);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Renderizado Condicional</h1>
                    {/* <h3>Renderizado con Variables</h3>
                    <p>{mostrarValor}</p> */}
                    {/* <h3>Renderizado con Operador &&</h3>
                    <p>{mostrarValor}</p> */}
                    <h3>Renderizado con Operador Ternario</h3>
                    <p>{mostrarValor}</p>
                    <h3>Renderizado con Estados</h3>
                    <div className={`alert ${darkMode ? "bg-black text-white" : "alert-light"}`} role="alert">Cursando React JS Developer!</div>
                    <p><button className={`btn ${darkMode ? "btn-dark" : "btn-light"}`} onClick={cambiarModo}>Cambiar Modo</button></p>
                </div>
            </div>
        </div>
    )
}

export default RenderizadoCondicional