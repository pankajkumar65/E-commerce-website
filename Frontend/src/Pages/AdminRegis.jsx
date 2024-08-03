import React from 'react'
import './CSS/Loginsignup.css'
import userLogo from './user_logo.png'
const AdminRegis = () => {
  return (
    <>
    <div>
      {/* <img src={userLogo} alt="" /> */}
    </div>
      <div className='loginsignup' style={{ height: "130vh" }}>
        <div className="loginsignup-container">
          <h1>Add Data</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Id' />
            <input type="text" placeholder='name' />
            <input type="text" placeholder='category' />
            <input type="url" placeholder='Image Url' />
            <input type="text" placeholder='New Price' />
            <input type="text" placeholder='Old Price' />
          </div>
          <button>ADD</button>
        </div>
      </div>
    </>
  )

}
export default AdminRegis
