import React, { Component } from 'react'
import './internapply.css'
import axios from 'axios'
export class Employee7 extends Component {
  constructor(props) {
    super(props)
    this.state = {
       list:[],
      popupbool:false,
      eventName:"",
      collegeName:"",
      place:"",
      
      date:"",
      link:"",
      id:""
      
    }
  }
  componentDidMount(){
    axios.get('http://localhost:3070/event-api')
    .then(res=>{this.setState({list:res.data})})
    .catch()
  }
  
  
  render() {
    const {eventName,collegeName,place,date,link}=this.state
    return (
      <div className='event'>
       <br></br><br></br>
       <button><a href='/Middle'>X</a></button>
       <h1>Events</h1>
        <form className='abcd'>
          {this.state.list.map(x=>(<>
          <div className='fromof'>
          <h3>Event Name : {x.eventName}</h3>
          <h3>College Name : {x.collegeName}</h3>
          <h3>Place : {x.place}</h3>
          <h3>Date : {x.date}</h3>
          <h3>URL <a href={x.link}>link</a></h3>
          
          </div></>))}
        </form>
      </div>
    )
  }
}
export default Employee7