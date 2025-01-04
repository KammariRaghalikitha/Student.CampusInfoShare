import React, { Component } from 'react'
import './internapply.css'
import axios from 'axios'
export class Employee3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
       list:[],
       popupbool:false,
       companyName:"",
      jobRole:"",
      location:"",
      experience:"",
      qualification:"",
      salary:"",
      link:"",
      id:""
    }
  }
  componentDidMount(){
    axios.get('http://localhost:3200/job-api')
    .then(res=>{this.setState({list:res.data})})
    .catch()
  }
  render() {
    const {companyName,jobRole,location,experience,qualification,salary,link}=this.state
    return (
      <div className='job'>
       <br></br><br></br>
       <button><a href='/Middle'>X</a></button>
       <h1> Jobs</h1>
        <form className='abcd'>
        
          {this.state.list.map(x=>(<>
          
          <div className='fromof'>
          
          <h3>Company Name : {x.companyName}</h3>
          <h3>Job Role : {x.jobRole}</h3>
          <h3>Location : {x.location}</h3>
          <h3>Experience : {x.experience}</h3>
          <h3>Qualification : {x.qualification}</h3>
          <h3>Salary : {x.salary}</h3>
          <h3>Job link : <a href={x.link}>link</a></h3>
        
          </div></>))}
        </form>
      </div>
    )
  }
}
export default Employee3