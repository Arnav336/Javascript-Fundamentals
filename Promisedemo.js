function delayAdd(x,y){
    return new Promise((resolve,reject)=>setTimeout(() => resolve(x+y),2000))
}
delayAdd(2,3).then((result)=>console.log(`After 2 seconds: ${result}`))
