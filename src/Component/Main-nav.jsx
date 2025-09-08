import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Component/Authcontext'
import "./Style/Main-nav.css"


export default function MainNavBar() {

  const { logOut } = useAuth();
  const navigate = useNavigate()
  const handleout = () => {
    logOut();
    navigate('/')

  }
  return (
    <div className='nav'>


      <img src='./images/logo.png'></img>
      <a class="navbar-brand" href="#">Unity</a>

      <div class="link">
        <Link class="nav-link" to="/addemp">Add</Link>
        <Link class="nav-link" to="/view">All-Emp</Link>
        <button className='logout-btn' onClick={handleout}>LogOut</button>
      </div>
    </div>
  )
}
