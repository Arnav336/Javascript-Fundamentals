function simulatePlayerTask(name,callback){
    const delay=Math.floor(Math.random()*1500)+500;
    setTimeout(()=>{
        if(name=="Villain"){
            return callback("fail: "+name,null);
        }else{
            return callback(null,name);
        }
    },delay)
}
function simulatePlayerAsync(name){
    return new Promise((resolve,reject)=>{
        simulatePlayerTask(name,(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    })
}

let players=["Alice", "Bob", "Charlie", "Villain", "Eve"];
let promises=players.map(key=>{
    if(key=="Alice"){
        return Promise.resolve("Alice won")
    }
   /*else if(key=="Eve"){
        return Promise.resolve("Eve rage Quit 😡")
    }*/else{
        return simulatePlayerAsync(key)
    }
    }
)
Promise.all(promises).then(results=>{
    console.log("All players finished:",results);
})
.catch(err=>{
    console.log("Failed",err);
});
Promise.race(promises).then(winner=>{
    console.log("First: ",winner)
})
.catch(err=>{
    console.log("Failed: ",err);
})
Promise.any(promises)
    .then(firstSuccess => {
        console.log("First successful player:", firstSuccess);
    })
    .catch(err => {
        console.log("Everyone failed:", err);
    });
Promise.allSettled(promises)
    .then(results => {
        console.log("🌍 All player results:");
        results.forEach(result => console.log(result));
});