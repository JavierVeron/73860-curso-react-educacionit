import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContextProvider from "./Clase5/context/ThemeContext";
import NavBar from "./ecommerceRedux/NavBar";
import Principal from "./ecommerceRedux/Principal"
import Producto from "./ecommerceRedux/Producto";
import Cart from "./ecommerceRedux/Cart";
import Checkout from "./ecommerceRedux/Checkout";
import ThankYou from "./ecommerceRedux/ThankYou";
import Error404 from "./ecommerceRedux/Error404";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<Principal />} />
            <Route path={"/category/:id"} element={<Principal />} />
            <Route path={"/producto/:id"} element={<Producto />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/thankyou/:id"} element={<ThankYou />} />
            <Route path={"/error"} element={<Error404 />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App