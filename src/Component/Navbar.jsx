
// import React from 'react'
// import "./Style/Main-nav.css"

// import { Link} from 'react-router-dom'
// const Navbar = () => {
//   return (
//     <div>
//       <nav className="navbar">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Navbar</a>
  
   
//     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div className="navbar-nav">
       
   
//         <Link className="nav-link" to="/signup">Signup</Link>
//         <Link className="nav-link" to="/login">Login</Link>
     
//       </div>
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }

// export default Navbar

import React from 'react'
import "./Style/Main-nav.css"
import { Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav'>
      
       <a className="navbar-brand" href="#">Unity</a>
       <div className='link'>
       <Link className="nav-link" to="/signup">Signup</Link>
       <Link className="nav-link" to="/login">Login</Link>
       </div>
    </div>
  )
}

export default Navbar
