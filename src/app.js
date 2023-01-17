const express = require("express");
const app = express();
const port = process.send.PORT|8000
const bodyParser = require("body-parser");
const hbs = require("hbs");
require("./models/database")
const User = require("./models/user")


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/statics",express.static("public"))

app.set("view engine","hbs")
app.set("views","views")
hbs.registerPartials("views/partials")


var id = "888";
var status = false;

app.get("",(req,res)=>{
    res.render("index",{
        status : status
    })
})

app.get("/about",(req,res)=>{
    res.render("about",{
        status:status
    })
})

app.get("/contact",(req,res)=>{
    res.render("contact",{
        status:status
    })
})

app.get("/frequentlyAskedQuestions",(req,res)=>{
    res.render("frequentlyAskedQuestions",{
        status:status
    });
})

app.get("/testimonials",(req,res)=>{
    res.render("testimonials",{
        status:status
    });
})


//********************************** Login ********************************/
app.get("/memberLogin",(req,res)=>{
    res.render("memberLogin",{
        status:status,
        error : false
    });
})

app.post("/memberLogin",async (req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        const data = await User.findOne({email:email})
        const dbpassword = data.password;
        if(dbpassword==password){
            id = data._id;
            status = true;
            res.redirect("/")
        }else{
            res.render("memberLogin",{
                status: status,
                error : true
            })
        }
    } catch (err) {
        res.send(err)
    }
})


app.get("/forgotPassword",(req,res)=>{
    res.render("forgotPassword",{
        status:status
    })
})

// **************************  signup1  *****************************

app.get("/signup1",(req,res)=>{
    res.render("signup1",{
        status:status
    })
})

app.post("/signup1",async(req,res)=>{
    try{
        const z = req.body;
        const data = await User.create({
            userfirstname : z.fname,
            userlastname : z.lname,
            title:z.title,
            phone:z.phone,
            email:z.email,
            password : z.password,
            company :{
                name : z.cname,
                dotnumber : z.dotnumber,
                phone :z.cphone,
                fax:z.fax,
                address1:z.address1,
                address2 : z.address2,
                city : z.city,
                state : z.state,
                zipcode : z.zipcode,
                referred : z.referred

            }
        })
        data.save();
        status = true;
        const temp = await  User.findOne({email : z.email});
        id = temp._id
        res.redirect("signup2");
    }catch(err){
        res.send(err);
    }
})

// ************************* Signup2  ******************************

app.get("/signup2",(req,res)=>{
    res.render("signup2",{
        status:status
    })
})

app.post("/signup2",async(req,res)=>{
    try {
        console.log(req.body)
        const data = await User.findByIdAndUpdate(id,{
            membership :{
                plan : req.body.plan,
                quanity : req.body.quantity,
            }
        }) 
        console.log(data);
        data.save();
        res.redirect("signup3")
    } catch (err) {
        res.send(err)
    }
})


//************************* Signup3  ********************************/

app.get("/signup3",(req,res)=>{
    res.render("signup3",{
        status:status
    })
})

app.post("/signup3",(req,res)=>{
    res.redirect("signup4")
})


//************************ Signup4 ***********************************/
app.get("/signup4",(req,res)=>{
    res.render("signup4",{
        status:status
    })
})

app.post("/signup4", async (req,res)=>{
    try {
        const z = req.body;
        const data = await User.findByIdAndUpdate(id,{
            payment :{
                firstname : z.fname,
                lastname : z.lname,
                creditcard : z.ccnumber,
                month : z.month,
                year : z.year,
                ccv : z.ccv,
            },
            billingaddress :{
                address1 : z.address1,
                address2 : z.address2,
                city :z.city,
                state : z.state,
                zipcode : z.zipcode
              }
        })
        data.save();
        res.redirect("signup5")
    } catch (err) {
        res.send(err);
    }
})

//************************ Signup5 ***********************************/
app.get("/signup5",(req,res)=>{
    res.render("signup5",{
        status:status
    })
})



app.get("/logout",(req,res)=>{
    status = false;
    id = "sdsd";
    res.redirect("/")
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})