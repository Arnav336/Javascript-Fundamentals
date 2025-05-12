async function loadJSON(url){
    let response=await fetch(url)
    if(response.status==200){
        let data=await response.json()
        return data
    }
    throw new Error(response.status)
}
console.log(loadJSON("https://javascript.info/no-such-user.json").catch(console.log))