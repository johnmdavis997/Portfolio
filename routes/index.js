// Require packages and models
var express = require("express");
var router = express.Router();

// Index
router.get("/", function(req, res){
    res.render("home")
});

// Show about page
router.get("/about", function(req, res){
    res.render("about")
});

// Show contact page
router.get("/contact", function(req, res){
    res.render("contact")
});

// Show login form
router.get("/login", function(req, res){
    res.render("login")
});

// Show register form
router.get("/register", function(req, res){
    res.render("register")
});

// Register logic

// Logout
router.get("/logout", function(req, res){
    res.render("logout")
});

module.exports = router;