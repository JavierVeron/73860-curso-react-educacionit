import { Link } from "react-router-dom"

const CartZero = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div className="alert alert-warning text-center p-3" role="alert">
                        <h3>No se encontraron Productos en el Carrito!</h3>
                        <Link to={"/"} className="btn colorBoton my-1">Ir a la Página Principal</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartZero