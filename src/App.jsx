import { Route, Routes } from "react-router-dom";
import ThemeContextProvider from "./Clase5/context/ThemeContext";
import CartContextProvider from "./ecommerceContext/context/CartContext";
import NavBar from "./ecommerceContext/NavBar";
import Principal from "./ecommerceContext/Principal"
import Producto from "./ecommerceContext/Producto";
import Cart from "./ecommerceContext/Cart";
import Checkout from "./ecommerceContext/Checkout";
import ThankYou from "./ecommerceContext/ThankYou";
import Error404 from "./ecommerceContext/Error404";
import Tareas from "./Clase7/Tareas";

function App() {
  return (
    <>
      <CartContextProvider>
        <ThemeContextProvider>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<Tareas />} />
            <Route path={"/category/:id"} element={<Principal />} />
            <Route path={"/producto/:id"} element={<Producto />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/thankyou/:id"} element={<ThankYou />} />
            <Route path={"/error"} element={<Error404 />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
        </ThemeContextProvider>
      </CartContextProvider>
    </>
  )
}

export default App