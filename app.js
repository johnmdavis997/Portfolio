var express = require("express");

var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("home")
});

app.get("/about", function(req, res){
    res.render("about")
});

app.get("/contact", function(req, res){
    res.render("contact")
});

app.get("/signin", function(req, res){
    res.render("contact")
});

app.get("/register", function(req, res){
    res.render("register")
});

app.get("/logout", function(req, res){
    res.render("logout")
});
app.listen(3000, function(req, res){
    console.log("Server has started!");
});