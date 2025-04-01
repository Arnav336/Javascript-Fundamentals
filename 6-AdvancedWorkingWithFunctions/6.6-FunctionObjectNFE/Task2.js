function sum(a) {
    let total = a;
  
    function inner(b) {
      total += b;
      return inner; 
    }
  
    inner.valueOf = function() {
      return total;
    };
  
    inner.toString = function() {
      return total;
    };
  
    return inner;
  }
console.log(+sum(1)(2));                
console.log(+sum(1)(2)(3));         
console.log(+sum(5)(-1)(2));        
console.log(+sum(6)(-1)(-2)(-3));   
console.log(+sum(0)(1)(2)(3)(4)(5)); 