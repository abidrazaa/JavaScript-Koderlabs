var students = [
    {
        name:"Abid",
        university:"NED"
    },
    {
        name:"Raza",
        university:"FAST"
    }
]

var addEntry = (newStudent,callback) => {

    setTimeout(function(){
        students.push(newStudent);
        callback();
    },3000)
    // console.log("Add Entry")
}

let newStudent = {name:"Naqvi",university:"HABIB"}


var getStudents = () => {
    students.forEach((element)=>{
        console.log("name ==>", element.name)
    })
}




addEntry(newStudent,getStudents)
