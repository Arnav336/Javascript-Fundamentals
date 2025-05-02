function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function() {
    console.log(String((this.name)));
  };
  
  let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();//Rabbit
Rabbit.prototype.sayHi();//Rabbit
Object.getPrototypeOf(rabbit).sayHi();//Rabbit
rabbit.__proto__.sayHi();//Rabbit