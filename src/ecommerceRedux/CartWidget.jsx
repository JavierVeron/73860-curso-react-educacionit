import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartWidget = () => {
    const cantProductos = useSelector(state => state.cart.cantProductos);    
    
    return (
        <Link to={"/cart"} className="btn colorBoton position-relative">
            <i className="bi bi-cart"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cantProductos}</span>
        </Link>
    )
}

export default CartWidget