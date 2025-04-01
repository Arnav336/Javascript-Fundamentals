function spy(func) {
    function wrapper(...args) {
      wrapper.calls.push(args);
      return func.apply(this, args);
    }
    wrapper.calls = [];
    return wrapper;
  }
  function work(a, b) {
    return a + b;
  }

  let spywork = spy(work);
  spywork(1, 2);
  spywork(9);
  console.log(spywork.calls);
  