function calculator(callback,x,y){
    return callback(x,y)
}
function add(x,y){
    return x+y
}
function sub(x,y){
    return Math.abs(x-y)
}
function mul(x,y){
    return x*y
}
function div(x,y){
    return x/y
}

console.log(calculator(add,10,5));
console.log(calculator(sub,10,5));
console.log(calculator(mul,10,5));
console.log(calculator(div,10,5));


