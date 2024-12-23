import { Link } from "react-router-dom"
import Logo from "./Logo";
import CartWidget from "./CartWidget";
import ThemeWidget from "./ThemeWidget";
import { useSelector } from "react-redux";

const NavBar = () => {
    const darkMode = useSelector(state => state.theme);

    return (
        <div className={`container my-5 ${darkMode ? "fondoNegro" : "colorNavBar"}`}>
            <div className="row">
                <div className="col-md-1">
                    <Logo />
                </div>
                <div className="col-md-5">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link colorNavBar">Menú</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/carne"} className="nav-link colorNavBar">Carne</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/pollo"} className="nav-link colorNavBar" >Pollo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/category/merienda"} className="nav-link colorNavBar">Merienda</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-5">
                    <ThemeWidget />
                </div>
                <div className="col-md-1">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar