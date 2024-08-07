import './App.css'
import Navbar from './Components/Navbar/Navbar'
import NavbarBL from './Components/NavbarBeforeLogin/NavbarBL'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import LoginSignup from './Pages/LoginSignup'
import Login from './Pages/Login'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import Footer from './Components/footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import Admin from './Pages/Admin'
import Adminsignup from './Pages/Adminsignup'
import AdminRegis from './Pages/AdminRegis'
import Newsletter from './Components/Newslatter/Newsletter'
import { useState } from 'react'

function App() {
  const [Navshow, setNavshow] = useState(false); 
  const handleShow = (childData) => {
    setNavshow(childData);
  };
   
  return (
    <div>
       <BrowserRouter>
       {Navshow ? <Navbar onSendmsg={handleShow}/> : <NavbarBL/>}
         {/* <Navbar/> */}
         {/* <NavbarBL/> */}
         <Routes>
           <Route path='/shop' element={<Shop/>}></Route>
           <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
           <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}></Route>
           <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}></Route>
           <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
           </Route>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/' element={<LoginSignup/>}/>
           <Route path='/login' element={<Login onSendmsg={handleShow}/>}/>
           <Route path='/admin' element={<Admin onSendmsg={handleShow}/>}/>
           <Route path='/adminsignup' element={<Adminsignup/>}/>
           <Route path='/adminregis' element={<AdminRegis/>}/>
         </Routes>
       </BrowserRouter>
       <Footer/>
    </div>
  )
}

export default App
