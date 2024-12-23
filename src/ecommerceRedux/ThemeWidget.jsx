import { useDispatch, useSelector } from "react-redux"

const ThemeWidget = () => {
    const darkMode = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const switchDarkMode = () => {
        dispatch({type:"SWITCH_DARK_MODE"})
    }

    return (
        <div className="form-check form-switch d-flex align-items-center justify-content-end">
            <input className="form-check-input mx-1" type="checkbox" role="switch" onChange={switchDarkMode} checked={darkMode ? "checked" : ""} />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Habilitar DarkMode</label>
        </div>
    )
}

export default ThemeWidget