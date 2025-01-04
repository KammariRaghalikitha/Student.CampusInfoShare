import React, { Component, useState, useEffect } from 'react'
import './middlepage.css';
import img1 from './internship logo.png';
import img2 from './projectlogo.jpg';
import img3 from  './eventlogo.png';
import img4 from './joblogo.png';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
const Middle2=()=>{
    const [isLoggedIn, setIsLoggedIn]  = useState('false');
   
   useEffect(()=>{
    
    fetch('http://localhost:3080/verify-user', {
            method: 'POST'
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
   
   
            // setWord(res)
    
        })
        
   }, [])

  const navigate=useNavigate()
    return (
      <div class="wrapper">
        <button><a href='/'>X</a></button>
  <div class="el" style={{i: 1}}>
    <div className='box'>
      <img className="image"src={img1} alt=""/>
    </div>
    <h1 className='head1'>Internships</h1>
    <button className='button' onClick={()=>navigate("/AdminIApply")}>Click</button>
    
    </div>
    
  <div class="el" style={{i: 2}}>
  <div className='box'>
  <img className="image"src={img2} alt=""/>
  </div>
    <h1 className='head2'>Projects</h1>
    <button className='button' onClick={()=>navigate("/AdminPApply")}>Click</button>
    
    </div>
  <div class="el" style={{i: 3}}>
    <div className='box'>
    <img className="image"src={img3} alt=""/>
    </div>
    <h1 className='head3'>Events</h1>
    <button className='button' onClick={()=>navigate("/AdminEApply")}>Click</button>
    </div>
  <div class="el" style={{i: 4}}>
    <div className='box'>
    <img className="image"src={img4} alt=""/>
    </div>
    <h1 className='head4'>Jobs</h1>
    <button className='button' onClick={()=>navigate("/AdminJApply")}>Click</button>
    
    </div>
    
</div>
    )
  }

export default Middle2