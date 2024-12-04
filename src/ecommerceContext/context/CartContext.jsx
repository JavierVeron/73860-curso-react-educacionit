import { createContext, useState } from "react";
import productos from "../json/productos.json"

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [ordenes, setOrdenes] = useState([]);
    
    const agregarProducto = (id) => {
        let producto;

        if (estaEnElCarrito(id)) {
            producto = cart.find(item => item.id == id);
            producto.cantidad += 1;
            setCart([...cart]);
        } else {
            producto = productos.find(item => item.id == id);
            producto.cantidad = 1;
            setCart([...cart, producto]);
        }
    }

    const eliminarProducto = (id) => {
        const cartActualizado = cart.filter(item => item.id != id);
        setCart(cartActualizado);
    }

    const incrementarCantidad = (id) => { //2
        let producto = cart.find(item => item.id == id);
        producto.cantidad += 1;
        setCart([...cart]);
    }

    const decrementarCantidad = (id) => {
        let producto = cart.find(item => item.id == id);

        if (producto.cantidad > 1) {
            producto.cantidad -= 1;
            setCart([...cart]);
        } else {
            eliminarProducto(id);
        }
    }

    const vaciarCarrito = () => {
        setCart([]);
    }

    const totalCarrito = () => {
        return cart.reduce((acum, item) => acum += item.cantidad, 0);
    }

    const sumaCarrito = () => {
        return cart.reduce((acum, item) => acum += item.cantidad * item.precio, 0);
    }

    const estaEnElCarrito = (id) => {
        return cart.some(item => item.id == id);
    }

    const agregarOrden = (orden) => {
        const total = ordenes.length;
        orden.id = total + 1;
        setOrdenes([...ordenes, orden]);

        return orden;
    }

    return <CartContext.Provider value={{cart, agregarProducto, eliminarProducto, incrementarCantidad, decrementarCantidad, vaciarCarrito, totalCarrito, sumaCarrito, ordenes, agregarOrden}}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider