function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

console.log( a instanceof B );//Instance of Returns True since it looks for the prototype chain and B is in the prototype chain of A