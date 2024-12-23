import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { AGREGAR_ORDEN } from "./redux/actions";
import CartZero from "./CartZero";

const Checkout = () => {
    const cart = useSelector(state => state.cart.carrito);
    const orders = useSelector(state => state.cart.ordenes);
    const cantProductos = useSelector(state => state.cart.cantProductos);
    const sumaProductos = useSelector(state => state.cart.sumaProductos);
    const dispatch = useDispatch();

    // Inicializo los valores de los Campos del Formulario
    const [nombre, setNombre] = useState("Javier Verón");
    const [email, setEmail] = useState("javier.veron@gmail.com");
    const [telefono, setTelefono] = useState("1122334455");
    const navigate = useNavigate();

    if (cantProductos == 0) {
        return <CartZero />
    }

    const generarOrden = () => {
        if (nombre == "") {
            return false;
        }

        if (email == "") {
            return false;
        }

        if (telefono == "") {
            return false;
        }

        const id = orders.length + 1;
        const cliente = {nombre:nombre, email:email, telefono:telefono};
        const productos = cart.map(item => ({id:item.id, nombre:item.nombre, precio:item.precio, cantidad:item.cantidad}));
        const fechaActual = new Date();
        const fecha = `${fechaActual.getDate()}-${fechaActual.getMonth()+1}-${fechaActual.getFullYear()} ${fechaActual.getHours()}:${fechaActual.getMinutes()}`;
        const orden = {id:id, cliente:cliente, productos:productos, total:sumaProductos, fecha:fecha};
        dispatch(AGREGAR_ORDEN(orden));      

        navigate("/thankyou/" + orden.id, {replace:true});
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} value={nombre} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} value={email} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} value={telefono} />
                        </div>
                        <button type="button" className="btn colorBoton" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="align-middle"><img src={item.imagen} alt={item.nombre} width={60} /></td>
                                        <td className="align-middle">{item.nombre}</td>
                                        <td className="align-middle text-center">${item.precio}</td>
                                        <td className="align-middle text-center">x {item.cantidad}</td>
                                        <td className="align-middle text-center">${item.cantidad * item.precio}</td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={4} className="align-middle text-center">Total a Pagar</td>
                                <td className="align-middle text-center">${sumaProductos}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Checkout