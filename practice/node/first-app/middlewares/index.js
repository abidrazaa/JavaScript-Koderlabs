const express = require("express");
const app = express();
const logger = require("./third_middleware"); // loading middleware from another file
var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(express.json());

// Custom middlewares
app.use(function(req, res, next){
    console.log("first middleware ... ");
    next();
})

app.use(function(req, res, next){
    console.log("second middleware ... ");
    next();
})

app.use(logger)

var courses = [{
    name:"DSD",
    year:4
}]

app.post("/addCourse",urlencodedParser, (req, res) => {

    const comingCourse = {
        name : req.body.first_name,
        year: req.body.last_name
    }
    // const comingCourse = body;
    courses.push(comingCourse);

    res.send(comingCourse);
    console.log(courses);
    console.log(comingCourse);

})

var server = app.listen(3000)  
 










