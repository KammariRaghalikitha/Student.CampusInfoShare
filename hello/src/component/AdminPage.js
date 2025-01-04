import React, { Component } from 'react'

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
  deleteEmp=(id)=>{
    axios.delete(`http://localhost:3200/job-api/${id}`)
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
    alert("Deleted")
    window.location.reload()
  }
  render() {
    const {companyName,jobRole,location,experience,qualification,salary,link,id}=this.state
    return (
      <div>
       <br></br><br></br>
       <button><a href='/admin-home-page'>X</a></button>
        <form className='abcd'>
        
          {this.state.list.map(x=>(<>
          
          <div className='fromof' key={x.id}>
          
          <h3>Company Name : {x.companyName}</h3>
          <h3>Job Role : {x.jobRole}</h3>
          <h3>Location : {x.location}</h3>
          <h3>Experience : {x.experience}</h3>
          <h3>Qualification : {x.qualification}</h3>
          <h3>Salary : {x.salary}</h3>
          <h3>Job link : <a href={x.link}>link</a></h3>
          <button onClick={()=>this.deleteEmp(x._id)}>Delete</button>
          </div></>))}
        </form>
      </div>
    )
  }
}
export default Employee3