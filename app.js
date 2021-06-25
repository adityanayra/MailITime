require('dotenv').config()
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const passportLocalMogoose = require("passport-local-mongoose");

const app = express();

app.use(express.static("public"));
app.set('view-engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));



app.use(passport.initialize());
app.use(passport.session());



// establishing connection b/w backend and DB
mongoose.connect("mongodb://localhost:27017/MailTimeUserDB", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});


// Takes to the application's home page
app.get("/", function(req, res){
    res.render("home.ejs");
})

// For Signing Up a user
app.get("/login", function(req, res){
    res.render("login.ejs");
})

// get request for sign-up
app.get("/signup", function(req, res){
    res.render("signup.ejs");
})

// post request for signup
app.post("/signup", function(req, res){
    
});

// listening for requests
app.listen(3000, function(){
    console.log("Listening at port 3000");
})
