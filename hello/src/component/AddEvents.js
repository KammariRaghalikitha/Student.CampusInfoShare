import React, { Component } from 'react'
import axios from 'axios';
import {Navigate} from 'react-router-dom' 
export class AddEmployee3 extends Component{
 
    constructor(props) {
      super(props)
      this.state = {
        eventName:"",
        collegeName:"",
        place:"",
        
        date:"",
        link:"",
        

      }
    }
    addtodb=()=>{
        const {eventName,collegeName,place,date,link}=this.state
       
        axios.post('http://localhost:3070/event-api',{
          eventName:eventName,
          collegeName:collegeName,
          place:place,
          
          date:date,
          link:link
        })
        .then(res=>{console.log(res)
        alert("Data added Successfully")
        window.location.href='/Apply'})
        .catch(err=>{console.log(err)})
        
    }
  
  render() {
    const {eventName,collegeName,place,date,link}=this.state
    
    return (
      <div>
        <form className="form-add">
        <button><a href='/Middle'>X</a></button>
        <label>Event Name</label>
        <input value={eventName} onChange={(e)=>this.setState({eventName:e.target.value})}></input><br></br>
        <label>College Name</label>
        <input value={collegeName} onChange={(e)=>this.setState({collegeName:e.target.value})}></input><br></br>
        <label>Place</label>
        <input value={place} onChange={(e)=>this.setState({place:e.target.value})}></input><br></br>
        <label>Date</label>
        <input value={date} onChange={(e)=>this.setState({date:e.target.value})}></input><br></br>
        <label>URL</label>
        <input value={link} onChange={(e)=>this.setState({link:e.target.value})}></input><br></br>
        
        <button onClick={this.addtodb}>Add</button>
        </form>
      </div>
  
    )
    
  }
}

export default AddEmployee3
