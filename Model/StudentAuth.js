const {Schema , model} =require("mongoose")
const mongoose =require("mongoose")

let StudentAuth=new Schema(
    {
         username:{
            type:String,
            required:[true , "Please add Username"],
            minlength:[3 ,"add username more then 3 characters"]
         },
         email:{
            type:String,
            required:[true , "please add valid Email"],
           
         },
         password:{
            type:String,
            required:[true , "please add valid password"],
            minlength:[6 ,"add password greater then 6 characters"],
            select:false,
         },
           role:{
            type:String,
            required:true,
            enum:["user", "publisher"]
           }
    }
)


module.exports = model("Student", StudentAuth);