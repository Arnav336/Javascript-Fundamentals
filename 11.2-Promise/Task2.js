function delay(ms) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms)
    });
    return promise
} 
  
delay(3000).then(() => console.log('runs after 3 seconds'));