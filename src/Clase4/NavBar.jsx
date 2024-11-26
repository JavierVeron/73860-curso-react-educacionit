import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <ul className="nav">
                        <li>
                            <Link to={"/"} title="Burger King">
                                <img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/wordpress/web/app/uploads/sites/5/2021/03/Burger-King-Logo-CMS.png" alt="Burger King" width={48} />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link colorNavBar">Menú</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"?category=carne"} className="nav-link colorNavBar">Carne</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"?category=pollo"} className="nav-link colorNavBar" >Pollo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"?category=merienda"} className="nav-link colorNavBar">Merienda</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar