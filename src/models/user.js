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
        referred : String,
   },
   membership :{
      plan : String,
      quanity : String,
   },
   driver :[{
     firstname : String,
     lastname : String,
     ssn : String,
     cdlstate : String,
     cdlnumber : String,
   }],
   payment :{
     firstname : String,
     lastname : String,
     creditcard : Number,
     month : Number,
     year : Number,
     ccv : Number,
   },
   billingaddress :{
     address1 : String,
     address2 : String,
     city :String,
     state : String,
     zipcode : String
   }
})

module.exports = mongoose.model("user",User);