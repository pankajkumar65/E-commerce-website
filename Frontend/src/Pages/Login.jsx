import React from 'react'
import './CSS/Loginsignup.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <div className="loginsignup-fields">
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='password' />
        </div>
        <button>Login</button>
         <p className="loginsignup-login">Not Registered? <Link to="/signup"><span style={{cursor:'pointer',textDecorationLine:"none"}}>Signup here</span></Link></p>
        <div className="loginsignup-agree">
        </div>
      </div>
    </div>
  )
}

export default Login
