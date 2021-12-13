const express = require("express");
const app = express();
app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello world");
})

app.get("/api/courses",(req, res)=> {
    var courses = ["Maths","English","Urdu","Physics"];
    res.send(courses);
})


const newCourses = [
    {id:1, name:"Course 1"},
    {id:2, name:"Course 2"},
    {id:3, name:"Course 3"}
]

// res.send(req.params); // shows all the things present in the url
// res.send(req.query); // shows things present after ? 

app.get("/api/course/:id",(req, res) => {
    var searchedCourse = newCourses.find((c) => {
        return c.id === parseInt(req.params.id);
    });

    if(!searchedCourse) {
        res.status(404).send("The Course doesnot exist in the course list.");
    }
    res.send(searchedCourse.name);
})

app.post("/api/courses", (req, res) => {
    
    const course = {
        name: req.body.name,
        id: newCourses.length + 1       
    }

    newCourses.push(course);
    res.send(course);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening at ${port}...`);
})