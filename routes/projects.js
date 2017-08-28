// Require packages and models
var express = require("express");
var router = express.Router();

router.get("/colorgame", function(req, res){
    res.render("projects/colorgame")
});

router.get("/circles", function(req, res){
    res.render("projects/circles")
})

router.get("/todo", function(req, res){
    res.render("projects/todo")
})

module.exports = router;