const mongoose =require('mongoose')
const empSchema=mongoose.Schema({
    projectName:String,
    description:String,
    email:String,
    link:{
        type: String,
        required:true,
        unique:true
    }
})
const EmpModel=mongoose.model('posts',empSchema)
module.exports=EmpModel