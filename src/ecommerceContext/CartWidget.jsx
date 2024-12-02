import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {totalCarrito} = useContext(CartContext);
    return (
        <Link to={"/cart"} className="btn colorBoton position-relative">
            <i className="bi bi-cart"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{totalCarrito()}</span>
        </Link>
    )
}

export default CartWidget