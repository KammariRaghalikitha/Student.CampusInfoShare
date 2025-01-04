const mongoose =require('mongoose')
const empSchema=mongoose.Schema({
   eventName:String,
   collegeName:String,
   place:String,
   
   date:Date,
    link:{
        type: String,
        required:true,
        unique:true
    }
})
const EmpModel=mongoose.model('posts',empSchema)
module.exports=EmpModel