import React from 'react'
import Login from "./Login/Login.js"
import Register from "./Register/Register.js"
import logo from "../images/logo.png" 

function navbar() {
  
  return (
    <>
    <div className='md:container md:my-5 md:mx-4'>
        <h1><img src={logo} className='w-[140px] ' alt='Logo' /></h1>
    </div>
      {/* <Login /> */}
      <Register />
      </>
  )
  
}

export default navbar;
