import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AGREGAR_PRODUCTO } from "./redux/actions";

const Producto = () => {
    const {id} = useParams();
    const productos = useSelector(state => state.productos);
    const producto = productos.find(item => item.id == id);
    const dispatch = useDispatch();
    
    const agregarProducto = (id) => {
        dispatch(AGREGAR_PRODUCTO(id));
    }
    
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
                    <p className="colorNombreProducto">{producto.descripcion}</p>
                    <p className="colorNombreProducto"><b>${producto.precio}</b></p>
                    <p><button className="btn colorBoton" onClick={() => {agregarProducto(producto.id)}}>Agregar (+)</button></p>
                </div>
            </div>
        </div>
    )
}

export default Producto