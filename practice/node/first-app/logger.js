const EventEmitter = require('events');

var url = "http://mylogger.io/log";

class Message extends EventEmitter{

    printMessage(message){
        // send an HTTP request
        // console.log(message);
        this.emit('message',{name:"Abid",university:"NED"})
    }
}


module.exports = Message; // exporting a module
