import { Route, Routes } from "react-router-dom";
import ThemeContextProvider from "./Clase5/context/ThemeContext";
import NavBar from "./ecommerceContext/NavBar";
import Principal from "./ecommerceContext/Principal"
import Producto from "./ecommerceContext/Producto";
import Error404 from "./ecommerceContext/Error404";
import CartContextProvider from "./ecommerceContext/context/CartContext";
import Cart from "./ecommerceContext/Cart";

function App() {
  return (
    <>
      <CartContextProvider>
        <ThemeContextProvider>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<Principal />} />
            <Route path={"/category/:id"} element={<Principal />} />
            <Route path={"/producto/:id"} element={<Producto />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/error"} element={<Error404 />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
        </ThemeContextProvider>
      </CartContextProvider>
    </>
  )
}

export default App