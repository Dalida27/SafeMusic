import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='ml-20 w-full'>
      <nav>
        <ul>
          <li>
            <NavLink to="/admin/all-products">
              View
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/add-product/ADD">
              Add
            </NavLink>
          </li>
        </ul>
      </nav>
      </div>

    </div>
  )
}

export default Navbar