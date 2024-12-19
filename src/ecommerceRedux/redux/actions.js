export const AGREGAR_PRODUCTO = (id) => ({type:"AGREGAR_PRODUCTO", payload:id});
export const ELIMINAR_PRODUCTO = (id) => ({type:"ELIMINAR_PRODUCTO", payload:id});
export const AUMENTAR_ITEM = (id) => ({type:"AUMENTAR_ITEM", payload:id});
export const DECREMENTAR_ITEM = (id) => ({type:"DECREMENTAR_ITEM", payload:id});
export const VACIAR_CARRITO = () => ({type:"VACIAR_CARRITO"});