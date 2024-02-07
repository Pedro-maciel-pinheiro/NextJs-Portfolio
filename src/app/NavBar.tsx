import React from 'react'
import "./css/navbar.css"

export const NavBar = () => {
  return (
    <div className='navbar'>
      <ul className='ul-navbar'>
        <div className='div-navbar'>

          <li><a className='link-navbar' href="#main">Main</a></li>

          <li><a className='link-navbar' href="#skill">Skills</a></li>

          <li><a className='link-navbar' href="#project">Projects</a></li>

        </div>
      </ul>


    </div>
  )
}

