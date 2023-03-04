const {connect , createConnection}=require("mongoose");
const {MONGODB_URL}=require("./index");

exports.DBConection=async()=>{
    console.log(MONGODB_URL)
    await connect(MONGODB_URL);
    console.log("Database Connected");
}
