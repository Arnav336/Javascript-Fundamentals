let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  function sumSalaries(obj){
    let Sum=0;
    for(let i of Object.values(obj)){
         Sum+=i;
    }
    return Sum;
  }
  console.log(sumSalaries(salaries));