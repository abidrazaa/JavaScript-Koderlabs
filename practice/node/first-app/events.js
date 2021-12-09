const EventEmitter = require('events'); // EventEmitter is a class
const emitter = new EventEmitter(); // instantiation of the class

// Register a listener
emitter.on('messageLogged', function(args){   // on is equal to addListener
    console.log("message logged called!!",args);
})

// Raise the event
emitter.emit('messageLogged',{name:"Abid",university:"NED"}) 