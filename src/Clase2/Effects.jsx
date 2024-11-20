import { useEffect, useState } from "react"

const Effects = () => {
    const [usuario, setUsuario] = useState("Valentino Torresi");
    const [usuario2, setUsuario2] = useState("Valentino Torresi");
    const [usuario3, setUsuario3] = useState({});
    console.log("1- Montaje del Componente");

    const obtenerNombre = () => {
        const nombres = ["Gustavo German Boni", "Maria Degrossi", "Maria Luján Massironi", "Rodrigo Garcia"];
        const numeroRandom = Math.floor(Math.random() * 4);
        const nombreElegido = nombres[numeroRandom];

        return nombreElegido;
    }

    const modificarUsuario = () => {
        setUsuario(obtenerNombre());
    }

    const modificarUsuario2 = () => {
        setUsuario2(obtenerNombre());
    }

    // Opción #1 - Sin dependencias (se utliza los corchetes vacíos), solo se dispara una vez en el momentaje del componente
    /* useEffect(() => {
        console.log("2- Actualización del Componente");
    }, []) */

    // Opción #2 - Con uno o más dependecias (escuchar algún cambio en la prop que pasemos por parámetro), se disparará todas las veces necesarias cuando haya un cambio de prop o estado
    /* useEffect(() => {
        console.log("2- Actualización del Componente");
    }, [usuario, usuario2]) */

    // Opción #3 - Todas los estados. Se disparará todas las veces necesarias cuando haya un cambio de cualquier prop o estado
    /* useEffect(() => {
        console.log("2- Actualización del Componente");
    }) */

    // Desmontaje de un Componente
    useEffect(() => {
        console.log("2- Actualización del Componente por el cambio del estado: usuario");

        return () => {
            console.log("3- Desmontaje del Componente");
        }
    }, [usuario])

    useEffect(() => {
        console.log("2- Consulta a la API");
        fetch("https://jsonplaceholder.typicode.com/users/2")
        .then(response => response.json())
        .then(data => {
            setUsuario3(data);
        })
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Ciclo de Vida</h1>
                    <p>Usuario #1: <b>{usuario}</b></p>
                    <p><button className="btn btn-primary" onClick={modificarUsuario}>Modificar Usuario #1</button></p>
                    <p>Usuario #2: <b>{usuario2}</b></p>
                    <p><button className="btn btn-primary" onClick={modificarUsuario2}>Modificar Usuario #2</button></p>
                    <h3>Consumo de API</h3>
                    <p>Usuario #3: <b>{usuario3.name + "(" + usuario3.username + ")"}</b></p>
                </div>
            </div>
        </div>
    )
}

export default Effects