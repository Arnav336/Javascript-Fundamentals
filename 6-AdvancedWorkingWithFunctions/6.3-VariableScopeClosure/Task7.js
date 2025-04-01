let x = 1;
function func() {
  console.log(x);

  let x = 2;
}
//func();
console.log("x=1 isn't visible to the console.log in the function. The variable is initialized after the console.log statement so no output")
