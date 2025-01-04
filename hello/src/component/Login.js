import React from 'react'
import {useState} from 'react'
import {useAuth} from './auth'
import {useNavigate} from 'react-router-dom'
import './login.css'
const Login = () => {
  const auth=useAuth()
  const navigate=useNavigate()
  const [regdno,setRegdno]=useState('')
  const [password,setPassword]=useState('')
  const[lis,setLis]=useState(true)
  const change=(event)=>{
      setRegdno(event.target.value)
  }
  const change1=(event)=>{
    setPassword(event.target.value)
}

  const handlelogin=(event)=>{
      console.log(auth.userlist)
      auth.userlist.map(x=>{
        if(x.regdno===regdno && x.password===password){
          auth.login(regdno)
          navigate('/')
          setLis(true)
        }
        else{
          setLis(false)
        }
      })
      event.preventDefault()   
      
  }
  
return (
  <div>
    <form onSubmit={handlelogin} className='login-form'>
    
      <h1 className='login'>Login</h1>
    <div className='login1'>
    <label>Regdno</label>
    <input type='text'placeholder='Enter Regdno'  value={regdno} onChange={change} required/>
    <br></br><br></br>
    <label>Password</label>
    <input type='password' placeholder='Enter Password' value={password} onChange={change1} required/>
    <br></br><br></br><br></br>
    <button type='submit' className='S'>Login</button><br></br>
    {!lis?<p>Invalid user and password</p>:''}
    <table>
    <tr>
              <th>
              <button onClick={()=>navigate("/")} className='X'>Back</button>
                  
                  </th>
                  <th>
                  <h4>Not a Member?</h4>
                  <a href='/Signup'>Register here</a>
                  
                  
                  </th>
                  <th></th>        
                  
              </tr>

    </table>
         
     
    </div>
    
    </form>  
    <br></br>
  </div>
)
}

export default Login