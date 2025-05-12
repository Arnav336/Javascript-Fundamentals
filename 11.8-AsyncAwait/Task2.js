class HttpError extends Error{
    constructor(response){
        super(`${response.status} for ${response.url}`);
        this.name="HttpError";
        this.response=response;
    }
}
async function loadJSON(url){
    let response=await fetch(url)
    if(response.status==200){
        let data=await response.json()
        return data
    }
    throw new HttpError(response)
}

async function demoGithubUser(){
    while (true){
        let name=prompt("Enter github username", "username");

        try {
            let user=await loadJSON(`https://api.github.com/users/${name}`)
            alert(`Full name: ${user.name}. Public repos: ${user.public_repos}`)
            return user
        } catch (error) {
            if(error instanceof HttpError && error.response.status==404){
                console.log("No such user");
            }
            else{
                throw error;
            }
        } 
    }  
    
}
demoGithubUser()
