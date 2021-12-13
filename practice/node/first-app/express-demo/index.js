const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("hello world");
})

app.get("/api/courses",(req, res)=> {
    var courses = ["Maths","English","Urdu"];
    res.send(courses);
})

app.listen(3000, () => {
    console.log("listening at port 3000...");
})