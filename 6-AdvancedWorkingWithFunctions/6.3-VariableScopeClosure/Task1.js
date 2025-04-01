let nam = "John";

function sayHi() {
  console.log("Hi, " + nam);
}

nam = "Pete";

sayHi();
console.log("Changes bcz the function uses the most recent value");
