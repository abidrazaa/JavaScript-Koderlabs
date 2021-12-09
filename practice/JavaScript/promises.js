
let mypromise = new Promise(function(resolve,reject){
    var x = 3;
    if(x==4){
        var msg ="Success!!";
        resolve(msg)
    }else{
        var msg = "Error!!";
        reject(msg)
    }
})

mypromise
    .then(function(msg){
        console.log("Hurray "+msg)
    })
    .then(function(){
        console.log("indented log")
    })
    .catch(msg=>{
        console.log(msg+":(")
    })
    .then(function(){
        console.log("after catch")
    }) 
     

