const express = require("express");
const app = express();
const port = process.send.PORT|8000
const bodyParser = require("body-parser");
const hbs = require("hbs");


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/statics",express.static("public"))

app.set("view engine","hbs")
app.set("views","views")
hbs.registerPartials("views/partials")

app.get("",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})

app.get("/frequentlyAskedQuestions",(req,res)=>{
    res.render("frequentlyAskedQuestions");
})

app.get("/testimonials",(req,res)=>{
    res.render("testimonials");
})

app.get("/memberLogin",(req,res)=>{
    res.render("memberLogin");
})

app.get("/forgotPassword",(req,res)=>{
    res.render("forgotPassword")
})

// **************************  signup1  *****************************

app.get("/signup1",(req,res)=>{
    res.render("signup1")
})

app.post("/signup1",(req,res)=>{
    res.render("signup2")
})

// ************************* Signup2  ******************************

app.post("/signup2",(req,res)=>{
    res.render("signup3")
})


//************************* Signup3  ********************************/

app.post("/signup3",(req,res)=>{
    res.render("signup4")
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})