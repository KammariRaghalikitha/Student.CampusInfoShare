import React, { Component } from 'react'
import axios from 'axios';
import {Navigate} from 'react-router-dom' 
export class AddEmployee1 extends Component{
 
    constructor(props) {
      super(props)
      this.state = {
      projectName:"",
      description:"",
      email:"",
      link:"",
         

      }
    }
    addtodb=()=>{
        const {projectName,description,email,link}=this.state
        axios.post('http://localhost:3030/project-api',{
          projectName:projectName,
          description:description,
          email:email,
          link:link
        })
        .then(res=>{console.log(res)
        alert("Data added Successfully")
        window.location.href='/Apply'})
        .catch(err=>{console.log(err)})
        
    }
  
  render() {
    const {projectName,description,email,link}=this.state
    return (
      <div>
        <form className="form-add">
        <button><a href='/Middle'>X</a></button>
        <label>Project Name</label>
        <input value={projectName} onChange={(e)=>this.setState({projectName:e.target.value})}></input><br></br>
        <label>Description</label>
        <input value={description} onChange={(e)=>this.setState({description:e.target.value})}></input><br></br>
        <label>Email</label>
        <input value={email} onChange={(e)=>this.setState({email:e.target.value})}></input><br></br>
        <label>Job link</label>
        <input value={link} onChange={(e)=>this.setState({link:e.target.value})}></input><br></br>
        <button onClick={this.addtodb} >Add</button>
        </form>
      </div>
  
    )
    
  }
}

export default AddEmployee1
