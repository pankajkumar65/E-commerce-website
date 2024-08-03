import React from 'react'
import './CSS/Loginsignup.css'
import { Link } from 'react-router-dom'
const Admin = ({onSendmsg}) => {
  const sendMessageToParent = () => {
    const Navshow = true;
    onSendmsg(Navshow);
  };
  return (
    <div>
      <div className='loginsignup' style={{ height: "100vh" }}>
        <div className="loginsignup-container" style={{ height: "500px" }}>
          <h1>Admin Login</h1>
          <div className="loginsignup-fields">
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='password' />
          </div>
          <Link to="/adminregis"><button onClick={sendMessageToParent}>Login</button></Link>
          <p className="loginsignup-login">Not Registered? <Link to="/"><span style={{ cursor: 'pointer', textDecorationLine: "none" }}>Signup here</span></Link></p>
          <div className="loginsignup-agree">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
