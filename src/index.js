const express = require("express");
const app = express();
const path =require("path");
const port =8000;
const hbs= require("hbs");

const staticpath= path.join(__dirname, "../public");
const viewsPath = path.join(__dirname,"../templates/views");
const partialsPath= path.join(__dirname, "../templates/partials");



app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("views",viewsPath)
hbs.registerPartials(partialsPath)



app.get("/",(req,res)=>{
    res.render("home");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/contact",(req,res)=>{
    res.render("Contact");
})

app.listen(port,(err)=>{
    console.log("server listening to port 8000")
})

