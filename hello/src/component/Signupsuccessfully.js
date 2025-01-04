import React, { Component } from 'react';
import {Navigate} from 'react-router-dom';

export class Signupsuccessfully extends Component {
    constructor(Props){
        super(Props)
        this.state={
            islogged : true
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({islogged:false})
        },2000)
    }
  render() {
    if (this.state.islogged){
        return (
            <div>
              <h1>Authenticated</h1>
              Redirecting to home page...
            </div>
          ) 
    }
    
    return <Navigate to ="/Login"/>
  
  }
}

export default Signupsuccessfully