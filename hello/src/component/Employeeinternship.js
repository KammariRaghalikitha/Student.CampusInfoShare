import React, { Component } from 'react'
import './internapply.css'
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
  render() {
    const{internshipName,company,jobPosition,location,startDate,duration,lastDate,link,id}=this.state
    return (
      <div className='intern'>
       <br></br><br></br>
       <button><a href='/Middle'>X</a></button>
       <h1>Internship</h1>
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
          
          </div></>))}
        </form>
      </div>
    )
  }
}
export default Employee5