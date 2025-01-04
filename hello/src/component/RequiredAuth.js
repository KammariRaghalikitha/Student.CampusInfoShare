import React from "react";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";
const RequiredAuth=(props)=>{
    const auth=useAuth()
    if(!auth.user){
        return<Navigate to ="/Login"/>
    }
    return props.children
}
export default RequiredAuth