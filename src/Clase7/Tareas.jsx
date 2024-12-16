import { useState } from "react"
import { createStore } from "redux"

// Definir un Array de Tareas
const tasks = [
    {id:1, nombre:"Desayunar", completado:true},
    {id:2, nombre:"Trabajar (Mañana)", completado:true},
    {id:3, nombre:"Almorzar", completado:true},
    {id:4, nombre:"Trabajar (Tarde)", completado:false},
    {id:5, nombre:"Merendar", completado:false},
    {id:6, nombre:"Salir a pasear", completado:false},
    {id:7, nombre:"Cenar", completado:true},
    {id:8, nombre:"Mirar Tele", completado:true}
]

// Definir las Acciones
const FILTER_TASK = (filter) => ({
    type:"FILTERED",
    payload:filter
})

const SHOW_ALL = {
    type:"SHOW_ALL"
}

// Definir el Reducer
const tasksReducer = (prevState = tasks, action) => {
    switch(action.type) {
        case "SHOW_COMPLETE":            
            return {
                ...prevState,
                filtered:tasks.filter(item => item.completado == action.payload)
            }
        case "FILTERED":            
            return {
                ...prevState,
                filtered:tasks.filter(item => item.completado == action.payload)
            }
        case "SHOW_ALL":
            return {
                ...prevState,
                filtered:tasks
            }
        default:
            return prevState
    }
}

// Creamos el Store a partir de nuestro Reducer
const store = createStore(tasksReducer);

const Tareas = () => {
    const [tareas, setTareas] = useState(store.getState());

    const mostrarTodos = () => {
        store.dispatch(SHOW_ALL);
    }

    const mostrarCompletados = () => {
        store.dispatch(FILTER_TASK(true));
    }

    const mostrarNoCompletados = () => {
        store.dispatch(FILTER_TASK(false));
    }

    store.subscribe(() => {
        setTareas(store.getState().filtered);
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="btn-group mb-3" role="group">
                    <button type="button" className="btn btn-primary" onClick={mostrarTodos}>Todas las Tareas</button>
                    <button type="button" className="btn btn-primary" onClick={mostrarCompletados}>Tareas Completadas</button>
                    <button type="button" className="btn btn-primary" onClick={mostrarNoCompletados}>Tareas No Completadas</button>
                    </div>
                    <ul className="list-group list-group-flush">
                    {
                        tareas.map(item => (
                            <li key={item.id} className="list-group-item">{item.nombre}</li>
                        ))
                    }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tareas