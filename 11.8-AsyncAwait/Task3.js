async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
  function f() {
    return wait().then(value => {
      console.log('Got:', value); 
      return value;                 
    });
  }
  
  f().then(final => console.log('f() resolved with', final));
  