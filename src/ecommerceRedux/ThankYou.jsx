import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { VACIAR_CARRITO } from "./redux/actions";

const ThankYou = () => {
    const {id} = useParams();
    const orders = useSelector(state => state.cart.ordenes);
    const orden = orders.find(item => item.id == id);
    const dispatch = useDispatch();
    
    const vaciarCarrito = () => {
        dispatch(VACIAR_CARRITO());
    }
    
    useEffect(() => {
        vaciarCarrito();
    }, [])

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div className="alert alert-warning text-center p-5" role="alert">
                        <h1>Gracias por tu Compra!</h1>
                        <h4>Detalle de la Compra</h4>
                        <p>Comprador: <b>{orden.cliente.nombre} ({orden.cliente.email})</b></p>
                        <p>Fecha: <b>{orden.fecha}</b></p>
                        <ul className="list-group list-group-flush">
                        {
                            orden.productos.map(item => (
                                <li key={item.id} className="list-group-item">{item.nombre} x{item.cantidad} ${item.cantidad * item.precio}</li>
                            ))
                        }
                        </ul>
                        <p>Total: <b>${orden.total}</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThankYou