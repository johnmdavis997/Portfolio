// Require packages and models
var express = require("express");
var router = express.Router();

router.get("/colorgame", function(req, res){
    res.render("projects/colorgame")
});

module.exports = router;