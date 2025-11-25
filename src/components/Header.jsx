import React from 'react'
import logo from "../utils/images/Netflix_Logo.png";

const Header = () => {
  return (
    <div className='absolute px-8 py-2 bg-linear-to-b from-black z-10'>
      <img src={logo} className='w-44' alt='netflix'/>
    </div>
  )
}

export default Header