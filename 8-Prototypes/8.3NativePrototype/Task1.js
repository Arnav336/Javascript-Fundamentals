Function.prototype.defer=function(ms){
    let f=this;
    setTimeout(ms)
    console.log("Hi")
}
function f() {
    console.log("Hello!");
  }
f.defer(1000);