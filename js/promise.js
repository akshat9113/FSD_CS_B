const  mypromsie=new Promise(
    (resolve,reject)=>{
        console.log("Executed promise");
        // resolve("success");
        reject("network error")

        
    }
);
mypromsie.then((msg)=>console.log(msg))
    .catch((err)=>console.log(err));