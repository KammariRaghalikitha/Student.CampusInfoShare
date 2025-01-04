import React from'react'
import {useState} from 'react'
import {useAuth} from './auth1'
import {useNavigate} from 'react-router-dom'
import './adminlogin.css'

import axios from 'axios'
const Adminlogin=()=>{
    const auth=useAuth()
    const navigate=useNavigate()
    const [mail,setMail]=useState('')
    const [password,setPassword]=useState('')
    const[lis,setLis]=useState(true)
    const change=(event)=>{
        setMail(event.target.value)
    }
    const change1=(event)=>{
      setPassword(event.target.value)
  }
  function handlelogin(e) {
    e.preventDefault()
    console.log(e)
    const formData = new FormData(e.target)
    axios({
      method: 'post',
      url: 'http://localhost:3080/admin-login',
      data: {
        username: formData.get('mail'),
        password: formData.get('password')
      }
    })
    .then((res)=>{
      console.log(res.data)
      if(res.data.msg === "Access Granted") {
        window.location.href = '/admin-home-page'
      }
      else {
        alert("Incorrect credentials! Try again...")
      }
    })
  }
  return (
    <div>
      
      <form onSubmit={handlelogin} className='admin-login'>
        <h1>Admin Login</h1><br></br>
      <label className='M'>Mail</label><br></br>
      <input type='email' name="mail" value={mail} onChange={change} required/>
      <br></br>
      <label>password</label><br></br>
      <input type='password' name="password" value={password} onChange={change1} required/>
      <br></br><br></br>
      <button type='submit'>Login</button>
      {!lis?<p>Invalid user and password</p>:''}
      </form>
      <br></br>
    </div>
  )
}
    
    
export default Adminlogin