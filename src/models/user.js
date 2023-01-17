const mongoose = require("mongoose");

const User = mongoose.Schema({
   userfirstname : String,
   userlastname : String,
   title : String,
   phone : Number,
   email : {
        type :String,
        require:true,
        unique : true
   },
   password : String,
   company :{
        name : String,
        dotnumber : String,
        phone: Number,
        fax : String,
        address1 : String,
        address2 : String,
        city : String,
        state : String,
        zipcode :String,
        referred : String
   }

})

module.exports = mongoose.model("user",User);