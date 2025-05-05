class Rabbit extends Object {
    constructor(name,baby) {
      super(); //Error was there before because Parent class was not called
      this.baby= baby;
      this.created = Date.now();
      this.name = name;
    }
  }
  
  let rabbit = new Rabbit("Rab","BabyRab");
  console.log(rabbit.name);
  console.log(new Date(rabbit.created));
  console.log(rabbit.baby);
  console.log(rabbit.hasOwnProperty('baby'));
  console.log(rabbit.hasOwnProperty('created'));
  console.log(rabbit.hasOwnProperty('name'));