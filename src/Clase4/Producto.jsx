import { useParams } from "react-router-dom"
import productos from "./json/productos.json"

const Producto = () => {
    const {id} = useParams();
    const producto = productos.find(item => item.id == id);
    
    if (!producto) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="colorNombreProducto">No se encuentra el Producto buscado!</h1>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <p><img src={producto.imagen} className="img-fluid" alt={producto.nombre} /></p>
                    <h1 className="colorNombreProducto">{producto.nombre}</h1>
                    <h4 className="colorNombreProducto">{producto.subtitulo}</h4>
                    <p className="colorNombreProducto">${producto.precio}</p>
                    <p className="colorNombreProducto">{producto.descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default Producto