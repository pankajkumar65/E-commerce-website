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
          <h1>Add Products</h1>
          <div className="loginsignup-fields">
            <div className='flex gap-2'>
              <p className='text-xl'>Select category :</p>
              <div className='flex gap-8'>
                <label class="flex items-center">
                  <input style={{ width: "1.2vw", height: "1.2vw", paddingLeft: "0", fontSize: "0" }} type="radio" name="category" value="men" className="form-radio h-1 w-1 text-blue-600 focus:ring-blue-600" />
                  <span className="ml-1 text-gray-700">Men</span>
                </label>
                <label class="flex items-center">
                  <input style={{ width: "1.2vw", height: "1.2vw", paddingLeft: "0", fontSize: "0" }} type="radio" name="category" value="men" className="form-radio h-1 w-1 text-blue-600 focus:ring-blue-600" />
                  <span className="ml-1 text-gray-700">Women</span>
                </label>
                <label class="flex items-center">
                  <input style={{ width: "1.2vw", height: "1.2vw", paddingLeft: "0", fontSize: "0" }} type="radio" name="category" value="men" className="form-radio h-1 w-1 text-blue-600 focus:ring-blue-600" />
                  <span className="ml-1 text-gray-700">Kids</span>
                </label>
              </div>
            </div>
            <input className="inp" type="text" placeholder='name' />
            <input className="inp" type="url" placeholder='Image Url' />
            <input className="inp" type="text" placeholder='New Price' />
            <input className="inp" type="text" placeholder='Old Price' />
            <input className="inp" type="text" placeholder='stock' />
          </div>
          <button>ADD</button>
        </div>
      </div>
    </>
  )

}
export default AdminRegis
