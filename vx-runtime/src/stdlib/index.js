// const all = fn => (...list) => list.reduce(fn);


const { Sum, Product } = require('../../../vx-core/lib');

const all = fn => (...list) => {
  if (list.length === 2) {
    return fn(list[0]).concat(list[1]);
  }
  return fn.fold(...list);
};

// monadics
const add = all(Sum);
const multiply = all(Product);

const subtract = all((x, y) => x - y);
const divide = all((x, y) => x / y);
const modulo = all((x, y) => x % y);
const log = console.log;

const environment = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  log,
  max: Math.max,
  min: Math.min,
  pi: Math.PI
};

module.exports = {
  environment
};
