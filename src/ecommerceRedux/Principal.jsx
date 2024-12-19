import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom"

const Principal = () => {
    const {id} = useParams(); 
    const navigate = useNavigate();
    const productos = useSelector(state => state.productos);
        
    const productosFiltro = id ? productos.filter(item => item.categoria == id) : productos;
    
    const redireccionar = () => {
        navigate("/", {replace:true});
    }

    if (productosFiltro.length == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h1>Error No se encontraron Productos!</h1>
                        <button className="btn btn-warning" onClick={redireccionar}>Volver a la Página Principal</button>
                    </div>
                </div>
            </div>
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