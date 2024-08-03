import React, { useState } from 'react'
import './CSS/Loginsignup.css'
import { Link } from 'react-router-dom'
const Login = ({onSendmsg}) => {
  const sendMessageToParent = () => {
    const Navshow = true;
    onSendmsg(Navshow);
  };

  return (
    <div className='loginsignup' style={{height:"100vh"}}>
      <div className="loginsignup-container " style={{height:"500px"}}>
        <Link to="/shop"><h1>Login</h1></Link>
        <div className="loginsignup-fields">
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='password' />
        </div>
        <Link to="/shop"><button onClick={sendMessageToParent}>Login</button></Link>
         <p className="loginsignup-login">Not Registered? <Link to="/"><span style={{cursor:'pointer',textDecorationLine:"none"}}>Signup here</span></Link></p>
        <div className="loginsignup-agree">
        </div>
      </div>
    </div>
  )
}

export default Login
