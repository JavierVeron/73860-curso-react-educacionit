import { useContext } from "react"
import { CartContext } from "./context/CartContext"

const Cart = () => {
    const {cart, eliminarProducto, vaciarCarrito} = useContext(CartContext);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="colorFondo"><img src={item.imagen} alt={item.nombre} width={60} /></td>
                                        <td className="colorFondo">{item.nombre}</td>
                                        <td>${item.precio}</td>
                                        <td><button className="btn colorBoton"><i className="bi bi-trash"></i></button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart