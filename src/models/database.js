const mongoose = require("mongoose")
const db = "mongodb://localhost:27017/project5"
const db1 = process.env.DB
mongoose.set("strictQuery", false);
mongoose.connect(db1,{
    useNewUrlParser :true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log("Connection Successfull")
}).catch(()=>{
    console.log("No connection")
})