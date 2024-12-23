import productos from "../json/productos.json";

const initialState = {
    productos:productos,
    carrito:[],
    ordenes:[],
    cantProductos:0,
    sumaProductos:0
}

const CartReducer = (state = initialState, action) => {
    let producto;
    let nuevoCarrito;

    switch(action.type) {
        case "AGREGAR_PRODUCTO":            
            producto = state.carrito.find(item => item.id == action.payload);

            if (producto) {
                producto.cantidad++;
                nuevoCarrito = [...state.carrito]
            } else {
                producto = state.productos.find(item => item.id == action.payload);
                producto.cantidad = 1;
                nuevoCarrito = [...state.carrito, producto]
            }
            
            return {
                ...state,
                carrito:nuevoCarrito,
                cantProductos:nuevoCarrito.reduce((acum, item) => acum += item.cantidad, 0),
                sumaProductos:nuevoCarrito.reduce((acum, item) => acum += item.cantidad * item.precio, 0)
            }
        case "ELIMINAR_PRODUCTO":
            nuevoCarrito = state.carrito.filter(item => item.id != action.payload);

            return {
                ...state,
                carrito:nuevoCarrito,
                cantProductos:nuevoCarrito.reduce((acum, item) => acum += item.cantidad, 0),
                sumaProductos:nuevoCarrito.reduce((acum, item) => acum += item.cantidad * item.precio, 0)
            }
        case "AUMENTAR_ITEM":
            producto = state.carrito.find(item => item.id == action.payload);
            producto.cantidad++;
            nuevoCarrito = [...state.carrito];         

            return {
                ...state,
                carrito:nuevoCarrito,
                cantProductos:nuevoCarrito.reduce((acum, item) => acum += item.cantidad, 0),
                sumaProductos:nuevoCarrito.reduce((acum, item) => acum += item.cantidad * item.precio, 0)
            }
        case "DECREMENTAR_ITEM":
            producto = state.carrito.find(item => item.id == action.payload);
            
            if (producto.cantidad == 1) {
                nuevoCarrito = state.carrito.filter(item => item.id != action.payload);
            } else {
                producto.cantidad--;
                nuevoCarrito = [...state.carrito];
            }

            return {
                ...state,
                carrito:nuevoCarrito,
                cantProductos:nuevoCarrito.reduce((acum, item) => acum += item.cantidad, 0),
                sumaProductos:nuevoCarrito.reduce((acum, item) => acum += item.cantidad * item.precio, 0)
            }
        case "VACIAR_CARRITO":
            return {
                ...state,
                carrito:[],
                cantProductos:0,
                sumaProductos:0
            }
        case "AGREGAR_ORDEN":            
            const orden = action.payload;
            const ordenesActualizado = [...state.ordenes, orden];            

            return {
                ...state,
                ordenes:ordenesActualizado
            }
        default:
            return state;
    }
}

export default CartReducer