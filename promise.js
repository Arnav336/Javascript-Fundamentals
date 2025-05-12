console.log("a")
let promise= new Promise((resolve,reject)=>{
    if (Math.random() > 0.5) {
        resolve("b")
    }
    else {
        reject("There is an error")
    }
})
promise.then((data=>console.log(data))).catch((error)=>console.log(error))
console.log("c")

