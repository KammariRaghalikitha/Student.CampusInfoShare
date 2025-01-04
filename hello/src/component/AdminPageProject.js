import React, { Component } from 'react'

import axios from 'axios'
export class Employee3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list:[],
      popupbool:false,
      projectName:"",
      description:"",
      email:"",
      link:"",
      id:""
    }
  }
  componentDidMount(){
    axios.get('http://localhost:3030/project-api')
    .then(res=>{this.setState({list:res.data})})
    .catch()
  }
  deleteEmp=(id)=>{
    axios.delete(`http://localhost:3030/project-api/${id}`)
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})
    alert("Deleted")
    window.location.reload()
  }
  render() {
    const {projectName,description,email,link}=this.state
    return (
      <div>
       <br></br><br></br>
       <button><a href='/admin-home-page'>X</a></button>
        <form className='abcd'>
          {this.state.list.map(x=>(<>
          <div className='fromof'>
          <h3>Project Name : {x.projectName}</h3>
          <h3>Description: {x.description}</h3>
          <h3>Email : {x.email}</h3>
          <h3>URL : <a href={x.link}>link</a></h3>
          <button onClick={()=>this.deleteEmp(x._id)}>Delete</button>
          </div></>))}
        </form>
      </div>
    )
  }
}
export default Employee3