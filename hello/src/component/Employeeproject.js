import React, { Component } from 'react'
import './internapply.css'
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
  render() {
    const {projectName,description,email,link}=this.state
    return (
      <div className='project'>
       <br></br><br></br>
       <button><a href='/Middle'>X</a></button>
       <h1>Project</h1>
        <form className='abcd'>
          {this.state.list.map(x=>(<>
          <div className='fromof'>
          <h3>Project Name : {x.projectName}</h3>
          <h3>Description: {x.description}</h3>
          <h3>Email : {x.email}</h3>
          <h3>URL : <a href={x.link}>link</a></h3>
          </div></>))}
        </form>
      </div>
    )
  }
}
export default Employee3