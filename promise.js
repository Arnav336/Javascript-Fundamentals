console.log("a")
let promise= new Promise((resolve,reject)=>{
    resolve("b")
    reject("There is an error")
})
promise.then((data=>console.log(data))).catch((error)=>console.log(error))
console.log("c")