let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
  };
  
  console.log( rabbit.jumps ); // true since it's a property of rabbit
  
  delete rabbit.jumps;
  
  console.log( rabbit.jumps ); // null since it's a property of the prototype animal
  
  delete animal.jumps;
  
  console.log( rabbit.jumps );//undefined since it's been deleted from rabbit and prototype