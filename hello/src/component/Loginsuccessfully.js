import React, { Component } from 'react';
import {Navigate} from 'react-router-dom';

export class Loginsuccessfully extends Component {
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
              <h1>Logged in Successfully</h1>
             
            </div>
          ) 
    }
    
    
  }
}

export default Loginsuccessfully