const mongoose = require("mongoose")
const db = "mongodb://localhost:27017/project5"
mongoose.set("strictQuery", false);
mongoose.connect(db,{
    useNewUrlParser :true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log("Connection Successfull")
}).catch(()=>{
    console.log("No connection")
})