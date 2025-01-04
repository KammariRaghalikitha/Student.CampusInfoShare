import React,{useContext,useEffect,useState} from 'react'
import axios from 'axios'
const AuthContext=React.createContext(null)
const AuthProvider=(props)=>{
    const [user,setUser]=useState(null)
    const [userlist,setUserList]=useState([])
    
    const login=(user)=>{
        setUser(user)
    }
    useEffect(()=>{
        axios.get('http://localhost:3020/admin')
        .then(res=>{setUserList(res.data)})
        .catch(err=>{console.log(err)})
    })
    const logout=()=>{
        setUser(null)
    }
    const signup=(regdno,password,firstName,lastName)=>{
        axios.post('http://localhost:3020/admin',{
            firstName:firstName,
            lastName:lastName,
            regdno:regdno,
            password:password
        })
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
        
    }
    return <AuthContext.Provider value={{user,login,logout,signup,userlist}}>
        {props.children}
        </AuthContext.Provider>
}
const useAuth=()=>{
    return useContext(AuthContext)
}
export{AuthProvider,useAuth}