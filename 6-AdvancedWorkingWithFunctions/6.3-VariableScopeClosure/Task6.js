function sum(a){
    return function(b){
        return a+b;
    };
}
let a=sum(8)(9);
console.log(a);