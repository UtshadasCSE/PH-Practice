const createCounter = function (n) {
  let currentValue = n;
  return function (n) {
    const res = currentValue;
    currentValue++;
    return res;
  };
};

let counter = createCounter(10);
console.log(counter());
console.log(counter());
