class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) {
        super(name)//Need to add Super to access methods of parent
    this.created = Date.now();
    }
  }
  
let rabbit = new Rabbit("White Rabbit");
 console.log(rabbit.name);