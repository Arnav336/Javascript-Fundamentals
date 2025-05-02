let dictionary = Object.create(null, {
    toString: { 
      value() {
        return Object.keys(this).join();//Returns only keys
      }
    }
  });
  
  dictionary.apple = "Apple";
  dictionary.__proto__ = "test";

  for(let key in dictionary) {
    console.log(key);
  }
  
console.log(String(dictionary)); //Returns keys as an array
