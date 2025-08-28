

import './Style/Login.css'

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://employee-rpbq.onrender.com/api/user/saveuser', formData);
      console.log(res);
      alert('User created successfully!');
      if (res.status === 201) {
        navigate('/login');
      }
    }
     catch (err) {
      console.error(err);
      alert('existing registered error');
    }
  };

  return (
    <div className='contanier'>
      <form className='form' onSubmit={handleSubmit}>
      <h2 className="heading">Sign Up</h2>
       
        <input
          type='text'
          name='name'
          placeholder='Enter Name'
          className='ename'
          onChange={handleChange}
        />
       
        <input
          type='email'
          name='email'
          placeholder='Enter Email'
          className='email'
          onChange={handleChange}
        />
      
        <input
          type='password'
          name='password'
          placeholder='Enter Password'
          className='ppswd'
          onChange={handleChange}
        />
        <button type='submit' className='login-btn'>Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
 