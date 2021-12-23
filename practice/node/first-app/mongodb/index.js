const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/playground')
    .then(()=>{
        console.log("connected to MONGO DB");
    })
    .catch((error)=>{
        console.error("n error occured while connecting Mongo DB...", error);
    })


const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    isPublished: Boolean
})


const Course = mongoose.model("Course", courseSchema);

async function createDocument( name_, author_, tags_, isPublished_){
    const course = new Course ({
        name: name_,
        author: author_,
        tags:tags_,
        isPublished: isPublished_
    })

    const result = await course.save();
    console.log(result)
}

// createDocument("React/Angular","Abid Raza",["fronend"],false);
// createDocument("Laravel","test name",["backend"],true);


async function getCourses(){
    const pageNumber = 2;
    const pageSize = 10;
    const courses = await Course
        .find({author:"Abid"})  //where name==Abid

        // LOGICAL QUERY OPERTORS

            // .find()
            // .or([{name:"Node js"}, {author:"Abid Raza"}])

        // COMPARISION QUERY OPERATORS

        // .find({price:{$gt:10}}) // where price > 10
        // .find(price:{$lte : 10}) // where price <= 10
        // .find({price: { $in : [10,15,20]}}) // where price is 10 or 15 or 20

        // .find({author: /^Abid/i}) // author start with Abid  // /i is for case sensitivity
        // .find({author: /Raza$/i}) // author ends with Raza
        // .find({author: /^Abid/i}) // contains Abid
        .limit(10)          // 10 records
        .sort({name:1})     // sort name in asc order // for desc order place -1
        // .count()     // returns count
        // .skip((pageNumber-1)*pageSize)   //pagination
        .select({name:1,tags:1});    // select name and tags columns

    console.log("courses==>",courses);
}

// getCourses();


async function updateCourse(id){
    console.log("in update")
    const course = await Course.findById(id);

    if(!course) return;

    course.author = "updated Abid";
    const updatedResult = await course.save();
    
    console.log(updatedResult);

}

// updateCourse("61c2ec517c3a73bc26f9fa0a")