import { createContext, useState } from "react";
import productos from "../json/productos.json"

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]); // array

    const agregarProducto = (id) => {
        const producto = productos.find(item => item.id == id); // objeto
        //setCart(producto); // pisar el array vacío por un objeto
        //setCart([producto]); // setear el carrito con un array de un solo elemento. No me permite tener historial (los elementos previos)
        setCart([...cart, producto]);
    }

    const eliminarProducto = (id) => {
        const cartActualizado = cart.filter(item => item.id != id);
        setCart([cartActualizado]);
    }

    const vaciarCarrito = () => {
        setCart([]);
    }

    const totalCarrito = () => {
        return cart.length; //0
    }

    return <CartContext.Provider value={{cart, agregarProducto, eliminarProducto, vaciarCarrito, totalCarrito}}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider