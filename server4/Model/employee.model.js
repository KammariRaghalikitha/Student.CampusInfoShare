const mongoose =require('mongoose')
const empSchema=mongoose.Schema({
    internshipName:String,
    company:String,
    jobPosition:String,
    location:String,
    startDate:Date,
    duration:String,
    lastDate:Date,
    link:{
        type: String,
        required:true,
        unique:true
    }
})
const EmpModel=mongoose.model('posts',empSchema)
module.exports=EmpModel