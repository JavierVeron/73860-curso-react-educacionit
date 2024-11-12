import { useState } from "react";

const States = () => {
    let curso1 = "Curso de Desarrollo Web"; // Declaro una variable
    const [curso2, setCurso2] = useState("Curso de React");
    
    const modifcarValores = () => {
        curso1 = "Curso de JavaScript"; // Este es su último valor
        //setCurso2(curso2 == "Curso de React" ? "CURSO DE REACT JS DEVELOPER" : "Curso de React"); // Modificar el estado Curso2 por medio de su función modificadora
        setCurso2("Hola");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>States</h1>
                    <p>{curso1}</p>
                    <p>{curso2}</p>
                    <p><button className="btn btn-primary" onClick={modifcarValores}>Modificar Valor</button></p>
                </div>
            </div>
        </div>
    )
}

export default States