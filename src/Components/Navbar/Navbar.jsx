import React, { useContext, useState } from "react";
import './Navbar.css'
import logo from '../Assert/logo.jpeg'
import cart_icon from '../Assert/cart_icon.jpeg'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = ()=>{
    const [menu,setmenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)

    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt=""></img>
                <p>Shopper</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setmenu("Shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="Shop"?<hr />:<></>}</li>
                <li onClick={()=>{setmenu("men")}}><Link style={{textDecoration:'none'}} to='/men'>Men</Link>{menu==="men"?<hr />:<></>}</li>
                <li onClick={()=>{setmenu("women")}}><Link style={{textDecoration:'none'}} to='/women'>Women</Link>{menu==="women"?<hr />:<></>}</li>
                <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr />:<></>}</li>
                <li onClick={()=>{setmenu("electronics")}}><Link style={{textDecoration:'none'}}  to='/Electronics'>Electronics</Link>{menu==="electronics"?<hr />:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt=""></img></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>

        </div>
    )
}

export default Navbar;