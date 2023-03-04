const express=require("express");
const {PORT}=require("./config");
const {DBConection}=require("./config/db")
const StudentRoutes=require("./routes/Student.js");
const cors =require("cors");
const bodyparser=require("body-parser")

let app=express();

let StartServer=async()=>{

//=============DataBase Connection Starts==============================//

   DBConection();

//=============DataBase Connection Ends==============================//

//=============Middelware Section Starts=============================//

app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

//=============Middelware Section Ends=============================//


//*************** Routes Middelware******************************* //
app.use("/api/students/", StudentRoutes)

//*************** Routes Middelware******************************* //

//=============App Listen Ends ===================================//
app.listen(PORT, (err)=>{
    if(err) throw err;
    console.log("Server is Running in port Number " + PORT);
})

//=============App Listen Ends===================================//


}

StartServer();



