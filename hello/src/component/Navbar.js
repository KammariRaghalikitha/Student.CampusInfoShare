import React from 'react'

import {NavLink} from 'react-router-dom'
import { useAuth } from './auth1'
const Navbar = () => {
    const auth=useAuth()
  return (
    <div>
      <nav className='nav1'>
        
        {!auth.user &&
        <NavLink to="/adminlogin">Admin</NavLink>}
        
      </nav>
    </div>
  )
}
export default Navbar