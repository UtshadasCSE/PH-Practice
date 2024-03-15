var createCounter = function (init) {
  function increment(init) {
    init++;
  }
  function reset(init) {
    init;
  }
  function decrement() {
    init--;
  }
  return {
    increment,
    reset,
    decrement,
  };
};

let counter = createCounter(6);
console.log(counter.increment());
