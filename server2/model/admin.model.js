const mongoose=require('mongoose')
const adminSchema = mongoose.Schema({
    name : String,
    mail : String,
    password : String
})
const AdminModel=mongoose.model('Admins',adminSchema)
module.exports=AdminModel;