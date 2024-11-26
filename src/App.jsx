import { Route, Routes } from "react-router-dom";
import Principal from "./Clase4/Principal";
import Producto from "./Clase4/Producto";
import NavBar from "./Clase4/NavBar";
import Error404 from "./Clase4/Error404";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Principal />} />
        <Route path={"/producto/:id"} element={<Producto />} />
        {/* <Route path={"/category/:id"} element={<Principal />} /> */}
        <Route path={"/error"} element={<Error404 />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
    </>
  )
}

export default App