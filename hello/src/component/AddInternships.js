import React, { Component } from 'react'
import axios from 'axios';
import {Navigate} from 'react-router-dom' 
export class AddEmployee2 extends Component{
 
    constructor(props) {
      super(props)
      this.state = {
        internshipName:"",
        company:"",
        jobPosition:"",
        location:"",
        startDate:"",
        duration:"",
        lastDate:"",
        link:"",
         

      }
    }
    addtodb=()=>{
      const{internshipName,company,jobPosition,location,startDate,duration,lastDate,link,id}=this.state
        axios.post('http://localhost:3040/intern-api',{
          internshipName:internshipName,
          company:company,
          jobPosition:jobPosition,
          location:location,
          startDate:startDate,
          duration:duration,
          lastDate:lastDate,
          link:link
        })
        .then(res=>{console.log(res)
        alert("Data added Successfully")
        window.location.href='/Apply'})
        .catch(err=>{console.log(err)})
        
    }
  
  render() {
    const{internshipName,company,jobPosition,location,startDate,duration,lastDate,link,id}=this.state
    
    return (
      <div>
        <form className="form-add">
        <button><a href='/Middle'>X</a></button>
        <label>Internship Name</label>
        <input value={internshipName} onChange={(e)=>this.setState({internshipName:e.target.value})}></input><br></br>
        <label>Company</label>
        <input value={company} onChange={(e)=>this.setState({company:e.target.value})}></input><br></br>
        <label>Job Position</label>
        <input value={jobPosition} onChange={(e)=>this.setState({jobPosition:e.target.value})}></input><br></br>
        <label>Location</label>
        <input value={location} onChange={(e)=>this.setState({location:e.target.value})}></input><br></br>
        <label>Start Date</label>
        <input value={startDate} onChange={(e)=>this.setState({startDate:e.target.value})}></input><br></br>
        <label>Duration</label>
        <input value={duration} onChange={(e)=>this.setState({duration:e.target.value})}></input><br></br>
        <label>Last Date</label>
        <input value={lastDate} onChange={(e)=>this.setState({lastDate:e.target.value})}></input><br></br>
        <label>Job link</label>
        <input value={link} onChange={(e)=>this.setState({link:e.target.value})}></input><br></br>
        <button onClick={this.addtodb}>Add</button>
        </form>
      </div>
  
    )
    
  }
}

export default AddEmployee2
