import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
        <ul className='navbar'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/rakes'>Rakes</NavLink>
              </li>
            <li>
              <NavLink to='/EmployeeCorner'>Employee Corner</NavLink>
            </li>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
            <li>
              <NavLink to='/lodingWitnessForm' >Loading Witness</NavLink>
            </li>
            <li>
              <NavLink to='/assistantList'>Assistant List</NavLink>
            </li>
            <li>
              <NavLink to='/servicesTxt'>Services</NavLink>
            </li>
            <li>
              <NavLink to='/rectifiedDetails'>Rectification</NavLink>
            </li>

        </ul>
    </>
  )
}
