Function.prototype.defer=function(ms){
    setTimeout(this,ms)
    console.log("Hi")
}
function f() {
    console.log("Hello!");
  }
f.defer(1000);