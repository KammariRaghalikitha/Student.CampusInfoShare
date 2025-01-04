import React, { Component } from 'react'

import axios from 'axios'
export class Employee5 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list:[],
      popupbool:false,
      internshipName:"",
      company:"",
      jobPosition:"",
      location:"",
      startDate:"",
      duration:"",
      lastDate:"",
      link:"",
      id:""
    }
  }
  componentDidMount(){
    axios.get('http://localhost:3040/intern-api')
    .then(res=>{this.setState({list:res.data})})
    .catch()
  }
  deleteEmp=(id)=>{
    axios.delete(`http://localhost:3040/intern-api/${id}`)
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
    alert("Deleted")
    window.location.reload()
  }
  render() {
    const{internshipName,company,jobPosition,location,startDate,duration,lastDate,link,id}=this.state
    return (
      <div>
       <br></br><br></br>
       <button><a href='/admin-home-page'>X</a></button>
        <form className='abcd'>
          {this.state.list.map(x=>(<>
          <div className='fromof'>
          <h3>Internship Name : {x.internshipName}</h3>
          
          <h3>Company : {x.company}</h3>
          
          <h3>Job Position : {x.jobPosition}</h3>
          
          <h3>Location : {x.location}</h3>
          
          <h3>Start Date : {x.startDate}</h3>
          
          <h3>duration : {x.duration}</h3>
          
          <h3>Last Date : {x.lastDate}</h3>
          
          <h3>Job link : <a href={x.link}>link</a></h3>
          <button onClick={()=>this.deleteEmp(x._id)}>Delete</button>
          </div></>))}
        </form>
      </div>
    )
  }
}
export default Employee5