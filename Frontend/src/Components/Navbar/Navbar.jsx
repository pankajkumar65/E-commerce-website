import React, { useState, useContext} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';
const Navbar = ({onSendmsg}) => {
  const sendMessageToParent = () => {
    const Navshow = false;
    onSendmsg(Navshow);
  };
  const[menu,setmenu] = useState("shop");
  const{message,getTotalCartItems} = useContext(ShopContext);
  return (
   <div className='Navbar'> 
    <div className='navbar'>
    <Link to="/shop">
      <div className="nav-logo">
        <img src={logo} alt=""/>
        
        <p>SHOPPER</p>
      </div>
      </Link>
      <ul className='nav-menu'>
        <li onClick={()=>setmenu("shop")}> <Link style={{textDecoration:'none'}} to='/shop'>Shop</Link>{menu=="shop"?<hr/>:<></>}</li>
        <li onClick={()=>setmenu("mens")}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu=="mens"?<hr/>:<></>}</li>
        <li onClick={()=>setmenu("womens")}> <Link  style={{textDecoration:'none'}} to='womens'>Womens</Link>{menu=="womens"?<hr/>:<></>}</li>
        <li onClick={()=>setmenu("kids")}><Link style={{textDecoration:'none'}} to="/kids">Kids</Link>{menu=="kids"?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
         <Link to="/"><button onClick={sendMessageToParent}>Logout</button></Link>
         {/* <Link to="/adminsignup"><button className='admin px-1 pb-4 '>Admin Login</button></Link> */}
         <Link to="/cart"><img src={cart_icon} alt=""/></Link>
         <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div> 
    </div>
       <div className='message'>
         {message && <p>{message}</p>}
       </div>
    </div>
  )
}

export default Navbar
