

import React from 'react'
import "./Style/Main-nav.css"
import { Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav'>
      <img src='./images/logo.png'></img>
       <a className="navbar-brand" href="/">Unity</a>
       <div className='link'>
        <div>
        <i class="fa fa-user-plus" aria-hidden="true"></i>
       <Link className="nav-link" to="/signup">Signup</Link></div>
       <div>
       <i class="fa fa-sign-in" aria-hidden="true"></i>
       <Link className="nav-link" to="/login">Login</Link></div>
       </div>
    </div>
  )
}

export default Navbar
