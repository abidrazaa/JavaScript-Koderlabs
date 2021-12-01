/*
CLOSURE:
Accessing variables from outside the function scope.
When you have a function defined inside another function, the inner function has access and scope of the outer function.
*/


function outer(){
    var name = "Abid";

    return function inner(){
        console.log("name ==>",name)
        name = "Raza"
        console.log("name ==>",name)
    }
}

var a = outer()
a()