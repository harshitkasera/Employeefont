import React, { useState } from 'react'
import './Style/Login.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {useAuth} from './Authcontext'
import {useNavigate} from 'react-router-dom'

 const Login = () => {

    const [email , setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {login} = useAuth()
    const navigate = useNavigate()

    const loginUser = async (e) =>{
        e.preventDefault();
        const responce = await axios.post('https://employee-rpbq.onrender.com/api/user/loginuser',{
          email,
          password
        })
        console.log(responce)
        console.log(responce.status)
        console.log(email)
        console.log(password)
        
        const token = responce.data.token
        localStorage.setItem('token',token)
        login(token)

        console.log(token)

        if(responce.status === 200){
          navigate('/addemp')
        }

    }
  return (
    <div className='contanier'>
        <form className='form' onSubmit={loginUser}>
      <h2 className="heading">Login</h2>
           
            <input  type='email' placeholder='enter the email' value={email} onChange={(e)=> setEmail(e.target.value)} ></input>
            <input  type='text' placeholder='enter the password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
            <button className='login-btn' type='submit'>Submit</button>
            <li type='none'>you Don't any account, Click here-
              <Link className='link-but' to="/signup">Signup</Link>
            </li>
        </form>
    </div>
  )
}
export default Login