const all = fn => (...list) => list.reduce(fn);

const add = all((x, y) => x + y);

const subtract = all((x, y) => x - y);
const multiply = all((x, y) => x * y);
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
