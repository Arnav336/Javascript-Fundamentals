function delayAdd(x, y) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (x > y) {
                reject(x + y);
            } else {
                resolve(x + y);
            }
        }, 1000);
    });
}
delayAdd(5,10).then((result) => {
    console.log("Result:", result);
    return result;
}).then(result=>{
    console.log("Step 1:", result);
    return delayAdd(result,20)
}).then(result=>{
    console.log("Step 2:", result);
    return delayAdd(result,100)
}).then(result=>{
    console.log("Step 3:", result);
    return delayAdd(result,100)
}).then(result=>console.log("Step 4:", result))
.catch((error) => {
    console.error("Error:", error);
});