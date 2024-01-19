import React, { useState } from 'react'
import './Signup.css'
import { json } from 'react-router-dom'

const Signup = () => {
  const [inputs, setInputs] = useState({
    firstname:'',
    lastname:'',
    email:'',
    username:'',
    phone:'',
    password:'',
    confirmpassword:''
  })
  const handleChange = (e)=>{
    e.preventDefault();
    setInputs({
           ...inputs,[e.target.name]:e.target.value
    })
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    // connect to fronted to backend  
    const respones = await fetch("http://localhost:5000/api/route/register", {
      method:"POST",
      Hearders: {"Content-Type": "application/json"},
      body:JSON.stringify(inputs)

    }
    )
    console.log(respones)
    setInputs({ 

    firstname:'',
    lastname:'',
    email:'',
    username:'',
    phone:'',
    password:'',
    confirmpassword:''
  })
  }
  return (
    <>
    <div className='wrap'>
      <h1>Sign Up</h1>
      <h4>Its free and only a minuts</h4>
      <form action="" method='post' onSubmit={handleSubmit}>
        <label htmlFor="">Fist Name</label>
        <input type="text" placeholder='First Name'name='firstname' onChange={handleChange} />
        <label htmlFor="">Last Name</label>
        <input type="text" placeholder='Last Name' name='lasname' onChange={handleChange} />
        <label htmlFor="">Email </label>
        <input type="text" placeholder='email' name='email' onChange={handleChange} />
        <label htmlFor="">User Name </label>
        <input type="text" placeholder='username' name='username' onChange={handleChange} />
        <label htmlFor="">Phone</label>
        <input type="text" placeholder='phone' name="phone" onChange={handleChange} />
        <label htmlFor="">Password</label>
        <input type="text" placeholder='password' name='password' onChange={handleChange} />
        <label htmlFor="">Comform Password </label>
        <input type="text" placeholder= "conform password" name='conformpassword' onChange={handleChange} />
        <button className='btn' type='submit'>submit</button>
      </form>
      <p> By click the sign Up button , you agree to our <br />
      <a href="#">Term and Condition</a><a href="#">Police Privecy</a>
      </p>
    </div>
    <p className='para-2'>Already have an account? <a href="#">Login here </a></p>
    </>
    
  )
}

export default Signup
