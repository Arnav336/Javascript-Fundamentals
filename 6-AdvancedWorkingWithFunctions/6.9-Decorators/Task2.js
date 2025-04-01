function delay(f, ms) {

    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  
  }
  
  let fdelay = delay(console.log, 1000);
  
  fdelay("test");
  