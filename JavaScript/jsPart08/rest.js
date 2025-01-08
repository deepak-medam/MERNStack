function sum(...args) {
  return args.reduce((sum, el) => sum + el);
}
sum(1, 2, 3, 4);

function min(...args) {
  return args.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
}

console.log(min(2, 1, 4, 0, 7));
