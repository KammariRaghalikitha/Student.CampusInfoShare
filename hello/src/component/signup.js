import React,{useState} from "react";
import { useAuth } from "./auth";
import './signup.css'
import { useNavigate } from "react-router-dom";
const Signup =() => {
    const [regdno,setRegdno]=useState('')
    const [password,setPassword]=useState('')
    const [firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[userBool,setUserBool]=useState(false)
    const auth =useAuth()
    const navigate = useNavigate()
    const handlesignup = (event) => {
        
        const userTaken=auth.userlist.some(x=>x.regdno===regdno)
        if(userTaken){
            setUserBool(true)
        }
        else{
        auth.signup(regdno,password,firstName,lastName)
        navigate('/Login')
        }
        event.preventDefault()
        
}
    const change =(event)=>{
        setRegdno(event.target.value)
    }
    const change1 =(event)=>{
        setPassword(event.target.value)
    }
    return(
        <div>
            <form onSubmit={handlesignup} className="signup-form">
                <h1>SIGN UP</h1>
            
            <label className="signfname">First Name</label>
            <input value={firstName} placeholder="Enter First Name" onChange={(e)=>{setFirstName(e.target.value)}} required/>
            <br></br><br></br>
            <label className="signlname">Last Name</label>
            <input value={lastName} placeholder="Enter Last Name" onChange={(e)=>{setLastName(e.target.value)}} required/>
            <br></br><br></br>
            <label>Regdno</label>
            <input type="text" placeholder="Enter Regdno" value={regdno} onChange={change} required/>
            <br></br><br></br>
            <label>Password</label>
            <input type="password" placeholder="Enter Password" value={password} onChange={change1} required/><br></br><br></br><br></br>
            {userBool?<p>Regdno is already exists</p>:""}
            <table>
                <tr>
                <th>
                <button className='X' onClick={()=>navigate("/Login")}>Cancel</button>
                </th>
                <th>
                    <button type="submit" className="K">Signup</button>
                </th>
                <th></th>
        
                 </tr>
             </table>
              
          
            </form>
            
        </div>
    )
}
export default Signup