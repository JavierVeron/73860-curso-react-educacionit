import NavBar from "./Clase4/NavBar";
import ThemeContextProvider from "./Clase5/context/ThemeContext";
import HOC from "./Clase5/HOC";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <NavBar />
        <HOC />
      </ThemeContextProvider>
    </>
  )
}

export default App