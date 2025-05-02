function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function() {
    console.log(String((this.name)));
  };
  
  let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();//Rabbit
Rabbit.prototype.sayHi();//Undefined
Object.getPrototypeOf(rabbit).sayHi();//Undefined
rabbit.__proto__.sayHi();//Undefined