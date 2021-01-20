const { environment } = require('@/stdlib');

const { Sum, Product } = require('../../../vx-core/lib');

const last = collection => collection[collection.length];
var i = 0;
const apply = node => {
  const fn = environment[node.name];

  // eslint-disable-next-line no-use-before-define
  const args = node.arguments.map(evaluator); // recurse downward to primitive

  if (typeof fn !== 'function') {
    throw new TypeError(`${node.name} is not a function`);
  } 
  
  console.log(args, ++i, node.name);
  if (node.name === 'add') {
    // TODO actual implementation
    if (typeof args[1] === 'object' && Reflect.has(args[1], 'concat')) return Sum(args[0]).concat(args[1]);
    return Sum.fold(...args);
  }
  if (node.name === 'multiply') {
    if (typeof args[1] === 'object' && Reflect.has(args[1], 'concat')) return Product(args[0]).concat(args[1]);
    return Product.fold(...args);
  } 
  
  return fn(...args);
};

const getIdentifier = node => {
  console.log('NODE', { node });
  if (environment[node.name]) return environment[node.name];
  throw new ReferenceError(`${node.name} is not defined`);
};

const evaluator = node => {
  console.log('NODE', { node });
  if (node.type === 'CallExpression') return apply(node);
  if (node.type === 'Identifier') return getIdentifier(node);
  // is primitive
  if (node.value) return node.value;
};

module.exports = {
  evaluator
};
