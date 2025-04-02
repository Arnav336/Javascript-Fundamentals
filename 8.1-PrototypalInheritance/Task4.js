let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster,
    stomach: []
  };
  
  let lazy = {
     
    __proto__: hamster,
    stomach: []
  };
  speedy.eat("Food")
  console.log(speedy.stomach); //Food
  console.log(lazy.stomach);//Empty Array
  
