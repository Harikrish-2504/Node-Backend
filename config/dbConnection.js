const mongoose = require("mongoose")
const connectDB = async ()=>{
try{
    const connect = await mongoose.connect(process.env.CONNECTION_StRING)
    console.log("Database connected",connect.connection.host,connect.connection.name);
}
catch(err){
    console.log(err);
    process.exit(1)
}
}
module.exports = connectDB;