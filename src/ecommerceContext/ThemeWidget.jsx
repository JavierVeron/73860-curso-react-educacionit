import { useContext } from "react";
import { ThemeContext } from "../Clase5/context/ThemeContext";

const ThemeWidget = () => {
    const {darkMode, switchDarkMode} = useContext(ThemeContext);

    return (
        <div className="form-check form-switch d-flex align-items-center justify-content-end">
            <input className="form-check-input mx-1" type="checkbox" role="switch" onChange={switchDarkMode} checked={darkMode ? "checked" : ""} />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Habilitar DarkMode</label>
        </div>
    )
}

export default ThemeWidget