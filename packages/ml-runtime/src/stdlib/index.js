// const all = fn => (...list) => list.reduce(fn);

const { 
  Sum,
  Difference, 
  Product
} = require('@monadic-lisp/core');

const all = fn => (...list) => {
  if (list.length === 2 && list[1].hasOwnProperty('concat')) { // eslint-disable-line no-prototype-builtins
    return fn(list[0]).concat(list[1]);
  }
  return fn.fold(...list);
};

// monoidal resolvers
const add = all(Sum);
const subtract = all(Difference);
const multiply = all(Product);

// TODO pending
const divide = all((x, y) => x / y);
const modulo = all((x, y) => x % y);
const log = console.log; // eslint-disable-line no-console

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
