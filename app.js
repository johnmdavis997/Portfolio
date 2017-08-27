// Require packages
var express     = require("express"),
    mongoose    = require("mongoose"),
    app         = express();

// Require routes
var indexRoutes     = require("./routes/index"),
    projectRoutes   = require("./routes/projects")

// Require models

// Configuration
mongoose.connect('mongodb://localhost/portfolio', {useMongoClient: true});
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Use routes
app.use("/", indexRoutes);
app.use("/project", projectRoutes);

// Creates server
app.listen(3000, function(req, res){
    console.log("Server has started!");
});