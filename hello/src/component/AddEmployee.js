import React, { Component } from 'react'
import axios from 'axios';
import {Navigate} from 'react-router-dom'
export class AddEmployee extends Component{
    
    constructor(props) {
      super(props)
      this.state = {
        companyName:"",
        jobRole:"",
        location:"",
        experience:"",
        qualification:"",
        salary:"",
        link:"",
        
}
      
    }
    addtodb=()=>{
        const {companyName,jobRole,location,experience,qualification,salary,link}=this.state
        axios.post('http://localhost:3200/job-api',{
          companyName:companyName,
          jobRole:jobRole,
          location:location,
          experience:experience,
          qualification:qualification,
          salary:salary,
          link:link,
            
        })
        .then(res=>{console.log(res.data)
        alert("Data added Successfully")
        window.location.href='/Apply'}
        )
        .catch(err=>{console.log(err)})
        
        
    }
    
  render() {
    const {companyName,jobRole,location,experience,qualification,salary,link}=this.state
     return (
      <div>
        <form className="form-add">
        <button><a href='/Middle'>X</a></button>
        
        <label>Company Name</label>
        <input value={companyName} onChange={(e)=>this.setState({companyName:e.target.value})} required></input><br></br>
        <label>Job Role</label>
        <input value={jobRole} onChange={(e)=>this.setState({jobRole:e.target.value})} required></input><br></br>
        <label>Location</label>
        <input value={location} onChange={(e)=>this.setState({location:e.target.value})} required></input><br></br>
        <label>Experience</label>
        <input value={experience} onChange={(e)=>this.setState({experience:e.target.value})} required></input><br></br>
        <label>Qualification</label>
        <input value={qualification} onChange={(e)=>this.setState({qualification:e.target.value})} required></input><br></br>
        <label>Salary</label>
        <input value={salary} onChange={(e)=>this.setState({salary:e.target.value})} required></input><br></br>
        <label>Job link</label>
        <input value={link} onChange={(e)=>this.setState({link:e.target.value})} required></input><br></br>
        <button onClick={this.addtodb}>Add</button>
        
        </form>
      </div>
  
    )
    
  }
}

export default AddEmployee



/*import React, { Component } from 'react'
import axios from 'axios';
import {Navigate} from 'react-router-dom' 
export class AddEmployee extends Component{
 
    constructor(props) {
      super(props)
      this.state = {
         firstName:"",
         lastName:"",
         age:"",
         link:"",
         

      }
    }
    addtodb=()=>{
        const {firstName,lastName,age,link}=this.state
        axios.post('http://localhost:3005/job-api',{
            firstName:firstName,
            lastName:lastName,
            age:age,
            link:link
        })
        .then(res=>{console.log(res)
        alert("Data added Successfully")})
        .catch(err=>{console.log(err)})
        
    }
  
  render() {
    const {firstName,lastName,age,link}=this.state
    
    return (
      <div>
        <form className="form-add">
        <label>FirstName</label>
        <input value={firstName} onChange={(e)=>this.setState({firstName:e.target.value})}></input><br></br>
        <label>LastName</label>
        <input value={lastName} onChange={(e)=>this.setState({lastName:e.target.value})}></input><br></br>
        <label>Age</label>
        <input value={age} onChange={(e)=>this.setState({age:e.target.value})}></input><br></br>
        <label>Job link</label>
        <input value={link} onChange={(e)=>this.setState({link:e.target.value})}></input><br></br>
        <button onClick={this.addtodb}>Add</button>
        </form>
      </div>
  
    )
    
  }
}

export default AddEmployee
*/