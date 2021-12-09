console.log(__dirname);
console.log(__filename);

const Message = require('./logger'); // loading a module

const message = new Message();

message.on('message',(msg) => {
    console.log("data==>",msg)
})

message.printMessage("message")


// function sayHello(name){
//     console.log("Hello "+name);
// }



// Message.printMessage("You are logged in!!")

// sayHello("Abid")


