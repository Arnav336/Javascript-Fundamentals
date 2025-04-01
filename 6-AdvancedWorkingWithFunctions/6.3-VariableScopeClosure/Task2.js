function makeWorker() {
    let name = "Pete";
  
    return function() {
      console.log(name);
    };
  }
  
  let name = "John";
  let work = makeWorker();
  work(); 
  console.log("Shows Pete since its in the closure of makeWorker");
  