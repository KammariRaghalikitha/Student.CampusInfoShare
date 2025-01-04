const express=require('express')
const router=express.Router()
const EmpModel=require('../Model/employee.model')
router.post('/',(req,res)=>{
    let newEmp=new EmpModel({
        internshipName:req.body.internshipName,
        company:req.body.company,
        jobPosition:req.body.jobPosition,
        location:req.body.location,
        startDate:req.body.startDate,
        duration:req.body.duration,
        lastDate:req.body.lastDate,
        link:req.body.link
    })
    newEmp.save()
    .then(response=>{res.send(response)})
    .catch(err=>{res.send(err)})
})    
router.get('/',(req,res)=>{
    EmpModel.find()
    .then(response=>{res.send(response)})
    .catch(err=>{res.send(err)})
})
router.put('/:id',(req,res)=>{
    const idQuery=req.params.id
    EmpModel.findByIdAndUpdate(idQuery,{$set:req.body})
    .then(response=>{res.send(response)})
    .catch(err=>{res.send(err)})
})
router.delete('/:id',(req,res)=>{
    const idQuery=req.params.id
    EmpModel.findByIdAndDelete(idQuery)
    .then(response=>{res.send(response)})
    .catch(err=>{res.send(err)})
})
module.exports=router