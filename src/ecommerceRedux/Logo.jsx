import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <Link to={"/"} title="Burger King">
            <img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/wordpress/web/app/uploads/sites/5/2021/03/Burger-King-Logo-CMS.png" alt="Burger King" width={48} />
        </Link>
    )
}

export default Logo