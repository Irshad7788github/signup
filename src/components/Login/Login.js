import React, { useState } from 'react'
import './Login.css'

const Login = () => {
  const [input, setInput] = useState({
    email:"",
    password:"",
    confirm :""
  })
  const handleChange = (e)=>{
    setInput({
      ...input,[e.target.value]:e.target.value
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    setInput({
      email:'',
      password:'',
      conform:''
    })
  }
  return (
    <>
    <div className='logi-box'> 
       <h1>Login</h1>
       <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input type="text" name= "email" onChange={handleChange} />
        <label htmlFor="">Password</label>
        <input type="text" name='password' onChange={handleChange}/>
        <label htmlFor="">Conform Password </label>
        <input type="text" name='conform password' onChange={handleChange} />
        <button className='btn'>Login</button>
       </form>
    </div>
    <p>Not have an account? <a href="#">Sign Up Here </a></p>
    </>
  )
}

export default Login
