import React, { Component } from 'react'
import './middlepage.css';
import img1 from './internship logo.png';
import img2 from './projectlogo.jpg';
import img3 from  './eventlogo.png';
import img4 from './joblogo.png';
import {useNavigate } from 'react-router-dom';
import { useAuth } from './auth'; 
const Middle=()=>{
  const navigate=useNavigate()
  const auth = useAuth(); 

  const handleNavigateHome = () => {
    navigate('/');
  };
 
    return (
      
      <div class="wrapper">
    <button className='button1' onClick={handleNavigateHome}>X</button>    
  <div class="el" style={{i: 1}}>
    <div className='box'>
      <img className="image"src={img1} alt=""/>
    </div>
    <h1 className='head1'>Internships</h1>
    <button className='button' onClick={()=>navigate("/InternshipPost")}>Post</button>
    <button className='button' onClick={()=>navigate("/InternshipApply")}>Apply</button>
    </div>
    
  <div class="el" style={{i: 2}}>
  <div className='box'>
  <img className="image"src={img2} alt=""/>
  </div>
    <h1 className='head2'>Projects</h1>
    <button className='button' onClick={()=>navigate("/ProjectPost")}>Post</button>
    <button className='button' onClick={()=>navigate("/ProjectApply")}>Apply</button>
    </div>
  <div class="el" style={{i: 3}}>
    <div className='box'>
    <img className="image"src={img3} alt=""/>
    </div>
    <h1 className='head3'>Events</h1>
    <button className='button' onClick={()=>navigate("/EventPost")}>Post</button>
    <button className='button' onClick={()=>navigate("/EventApply")}>Apply</button></div>
  <div class="el" style={{i: 4}}>
    <div className='box'>
    <img className="image"src={img4} alt=""/>
    </div>
    <h1 className='head4'>Jobs</h1>
    <button className='button' onClick={()=>navigate("/Post")}>Post</button>
    <button className='button' onClick={()=>navigate("/Apply")}>Apply</button>
    </div>
   
</div>
    )
  }

export default Middle
