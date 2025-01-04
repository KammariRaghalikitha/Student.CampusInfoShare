import React, { Component } from 'react'

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
  deleteEmp=(id)=>{
    axios.delete(`http://localhost:3070/event-api/${id}`)
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
    alert("Deleted")
    window.location.reload()
  }
  
  render() {
    const {eventName,collegeName,place,date,link}=this.state
    return (
      <div>
       <br></br><br></br>
       <button><a href='/admin-home-page'>X</a></button>
        <form className='abcd'>
          {this.state.list.map(x=>(<>
          <div className='fromof'>
          <h3>Event Name : {x.eventName}</h3>
          <h3>College Name : {x.collegeName}</h3>
          <h3>Place : {x.place}</h3>
          <h3>Date : {x.date}</h3>
          <h3>URL <a href={x.link}>link</a></h3>
          <button onClick={()=>this.deleteEmp(x._id)}>Delete</button>
          </div></>))}
        </form>
      </div>
    )
  }
}
export default Employee7