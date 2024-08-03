import React, { useState, useContext } from 'react'
import './NavbarBL.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';
const NavbarBL = () => {

    const [menu, setmenu] = useState("shop");
    const { message, getTotalCartItems } = useContext(ShopContext);
    return (
        <div className='Navbar'>
            <div className='navbar flex justify-between px-36'>
                <Link to="/shop">
                    <div className="nav-logo">
                        <img src={logo} alt="" />
                        <p>SHOPPER</p>
                    </div>
                </Link>
                <div className='nav-login-cart'>
                    <Link to="/"><button>Login</button></Link>
                    <Link to="/adminsignup"><button className='admin px-1 pb-4 '>Admin Login</button></Link>
                </div>
            </div>
            <div className='message'>
                {message && <p>{message}</p>}
            </div>
        </div>
    )
}

export default NavbarBL
