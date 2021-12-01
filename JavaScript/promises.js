console.log("Ok")

let mypromise = new Promise(function(resolve,reject){
    var x = 4;
    if(x==4){
        var msg ="Success!!";
        resolve(msg)
    }else{
        var msg = "Error!!";
        reject(msg)
    }
})

mypromise.then(function(msg){
    console.log("Hurray "+msg)
}).catch(msg=>{
    console.log(msg+":(")
})  

