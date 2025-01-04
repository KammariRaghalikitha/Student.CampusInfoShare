import React from 'react'
import {useNavigate} from 'react-router-dom'
const Home = () => {
    const navigate=useNavigate()
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={()=>navigate("order",{replace:true})}>Click here</button>
    </div>
  )
}

export default Home;
