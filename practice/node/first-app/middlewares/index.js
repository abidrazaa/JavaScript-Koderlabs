const express = require("express");
const app = express();
const logger = require("./third_middleware");
var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(express.json());


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
    

// var express = require('express');  
// var app = express();  
// var bodyParser = require('body-parser');  
// // Create application/x-www-form-urlencoded parser  
// var urlencodedParser = bodyParser.urlencoded({ extended: false })  
// // app.use(express.static('public'));  
// // app.get('/index.html', function (req, res) {  
// //    res.sendFile( __dirname + "/" + "index.html" );  
// // })  
// app.post('/process_post', urlencodedParser, function (req, res) {  
//    // Prepare output in JSON format  
//    res.send(req.body)
// //    response = {  
// //        first_name:req.body.first_name,  
// //        last_name:req.body.last_name  
// //    };  
// //    console.log(response);  
// //    res.end(JSON.stringify(response));  
// })  
// var server = app.listen(8000, function () {  
// //   var host = server.address().address  
// //   var port = server.address().port  
// //   console.log("Example app listening at http://%s:%s", host, port)  
// })  










