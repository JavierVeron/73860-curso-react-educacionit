import { Route, Routes, useRoutes } from "react-router-dom";
import Principal from "./Clase4/Principal";
import Producto from "./Clase4/Producto";
import NavBar from "./Clase4/NavBar";
import Error404 from "./Clase4/Error404";

function App() {
  let routes = useRoutes([
    {path:"/", element:<Principal />},
    {path:"/producto/:id", element:<Producto />},
    {path:"/error", element:<Error404 />},
    {path:"*", element:<Error404 />}
  ])

  /* return (
    <>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Principal />} />
        <Route path={"/producto/:id"} element={<Producto />} />
        <Route path={"/error"} element={<Error404 />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
    </>
  ) */

  return (
    <>
      <NavBar />
      {routes}
    </>
  )
}

export default App