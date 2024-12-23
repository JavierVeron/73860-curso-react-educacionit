import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ELIMINAR_PRODUCTO, AUMENTAR_ITEM, DECREMENTAR_ITEM, VACIAR_CARRITO } from "./redux/actions";
import CartZero from "./CartZero";

const Cart = () => {
    const cart = useSelector(state => state.cart.carrito);
    const cantProductos = useSelector(state => state.cart.cantProductos);
    const sumaProductos = useSelector(state => state.cart.sumaProductos);

    const dispatch = useDispatch();
    
    const eliminarProducto = (id) => {
        dispatch(ELIMINAR_PRODUCTO(id));
    }
    
    const incrementarCantidad = (id) => {
        dispatch(AUMENTAR_ITEM(id));
    }
    
    const decrementarCantidad = (id) => {
        dispatch(DECREMENTAR_ITEM(id));
    }
    
    const vaciarCarrito = () => {
        dispatch(VACIAR_CARRITO());
    }
    
    if (cantProductos == 0) {
        return <CartZero />
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={6} className="text-end"><button className="btn colorBoton btn-sm" onClick={vaciarCarrito}>Vaciar Carrito</button></td>
                            </tr>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="align-middle"><img src={item.imagen} alt={item.nombre} width={60} /></td>
                                        <td className="align-middle">{item.nombre}</td>
                                        <td className="align-middle text-center">${item.precio}</td>
                                        <td className="align-middle text-center"><button className="btn colorBoton btn-sm" onClick={() => {decrementarCantidad(item.id)}}>-</button> x {item.cantidad} <button className="btn colorBoton btn-sm" onClick={() => {incrementarCantidad(item.id)}}>+</button></td>
                                        <td className="align-middle text-center">${item.cantidad * item.precio}</td>
                                        <td className="align-middle text-end"><button className="btn colorBoton btn-sm" onClick={() => {eliminarProducto(item.id)}}><i className="bi bi-trash"></i></button></td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={4} className="align-middle text-center">Total a Pagar</td>
                                <td className="align-middle text-center">${sumaProductos}</td>
                                <td className="align-middle text-end"><Link to={"/checkout"} className="btn colorBoton btn-sm">Checkout</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart