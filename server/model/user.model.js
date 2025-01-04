const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    regdno:String,
    password:String
})
const userModel=mongoose.model('users',userSchema)
module.exports=userModel