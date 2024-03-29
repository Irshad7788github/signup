const mongoose= require("mongoose")

const UserSchema = new mongoose.Schema(
    {
       firstname:{
        type:String,
        require: true
       },
       lastname:{
        type:String,
        require:true
       },
       email:{
        type:String,
        require:true
        
       },
       username:{
        type:String,
        require:true
        
       },
       phone:{
        type:String,
        require:true
       },
       password:{
        type:String,
        require:true
       },
       conformpassword:{
        type:String,
        require:true
       }
    }
)

const User = mongoose.model("User", UserSchema)
module.exports = User