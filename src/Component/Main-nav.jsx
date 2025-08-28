import { Link , useNavigate } from 'react-router-dom';
import {useAuth} from '../Component/Authcontext'
import "./Style/Main-nav.css"

export default function MainNavBar() {

    const {logOut} = useAuth();
    const navigate = useNavigate()
    const handleout = () =>{
        logOut();
        navigate('/')
       
    }
    return (
      <div>

             <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
       
         <Link class="nav-link" to="/addemp">AddEmp</Link>
          <Link class="nav-link" to="/view">View-All-Employ</Link>
          <button className='logout-btn' onClick={handleout}>LogOut</button>
   
       
      </div>
    </div>
  </div>
</nav>
      </div>
    )
  }
