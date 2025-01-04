const mongoose =require('mongoose')
const empSchema=mongoose.Schema({
    companyName:String,
    jobRole:String,
    location:String,
    experience:String,
    qualification:String,
    salary:Number,
    link:{
        type: String,
        required:true,
        unique:true
    }
})
const EmpModel=mongoose.model('posts',empSchema)
module.exports=EmpModel