import React from 'react'
import logo from "./Images/logo.jpeg"

const Header = () => {
  return (
    <>
        <div className='header'>
              <img src={logo} alt='logo' />
              <h1>Keep App</h1>
      </div>
    </>
  );
}

export default Header