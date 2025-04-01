function sayHi() {
    console.log( this.name );
  }
  sayHi.test = 5;
  
  let bound = sayHi.bind({
    name: "John"
  });
  
  alert( bound.test );//undefined