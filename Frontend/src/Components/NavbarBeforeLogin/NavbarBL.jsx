import React, { useState, useContext } from 'react'
import './NavbarBL.css'
import logo from '../Assets/logo.png'
import userLogo from '../Assets/user_logo.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';
const NavbarBL = () => {

    const [menu, setmenu] = useState("shop");
    const { message, getTotalCartItems } = useContext(ShopContext);
    return (
        <div className='Navbar'>
            <div className='navbar flex justify-between px-36'>
                <Link to="/shop">
                    <div className="nav-logo ">
                        <img src={logo} alt="" />
                        <p>SHOPPER</p>
                    </div>
                </Link>
                <div class="relative group">
                    <button class="flex items-center focus:outline-none">
                        <img src={userLogo} alt="Profile" class="w-8 h-8 rounded-full mr-2" />
                        <span class="text-gray-700 text-xl">Login</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div class="absolute right-0 left-1 hidden w-48 mt-0 bg-white border border-gray-200 rounded shadow-lg group-hover:block">
                        <a href="/" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-xl">Customer Login</a>
                        <a href="/adminsignup" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-xl">Admin Login</a>
                    </div>
                </div>
    
            </div>
            <div className='message'>
                {message && <p>{message}</p>}
            </div>
        </div>
    )
}

export default NavbarBL
