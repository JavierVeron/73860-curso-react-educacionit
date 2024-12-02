import NavBar from "./Clase4/NavBar";
import Api from "./Clase5/Api";
import ThemeContextProvider from "./Clase5/context/ThemeContext";
import HOC from "./Clase5/HOC";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <NavBar />
        <Api />
      </ThemeContextProvider>
    </>
  )
}

export default App