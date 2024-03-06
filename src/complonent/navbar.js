import React from 'react'
import logo from "../images/logo.png" 

function navbar() {
  
  return (
    <div className='md:container md:my-5 md:mx-4'>
        <h1><img src={logo} className='w-[140px] ' alt='Logo' /></h1>
    </div>
  )
}

export default navbar;
