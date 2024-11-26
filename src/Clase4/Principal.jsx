import { Link, Navigate, useParams, useSearchParams } from "react-router-dom"
import productos from "./json/productos.json"

const Principal = () => {
    /* const {id} = useParams(); */ // Capturar paramétros en la url
    const [params, setParams] = useSearchParams(); // Capturar valores de las variables ?query=valor1&query2=valor2
    const id = params.get("category");
        
    const productosFiltro = id ? productos.filter(item => item.categoria == id) : productos;

    if (productosFiltro.length == 0) {
        return (
            <Navigate to={"/error"} />
        )
    }

    return (
        <div className="container">
            <div className="row">
                {
                    productosFiltro.map(item => (
                        <div key={item.id} className="col-md-3">
                            <Link to={"/producto/" + item.id} className="text-decoration-none">
                                <div className="card border-0 colorFondo text-center">
                                    <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                                    <div className="card-body">
                                        <h4 className="card-text colorNombreProducto">{item.nombre}</h4>
                                        <p className="card-text colorNombreProducto">${item.precio}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Principal