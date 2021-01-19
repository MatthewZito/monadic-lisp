const { environment } = require('./stdlib');

const last = collection => collection[collection.length];

const apply = node => {
  const fn = environment[node.name];

  // eslint-disable-next-line no-use-before-define
  const args = node.arguments.map(evaluator); // recurse downward to primitive

  if (typeof fn !== 'function') {
    throw new TypeError(`${node.name} is not a function`);
  }
  
  return fn(...args);
};

const getIdentifier = node => {
  if (environment[node.name]) return environment[node.name];
  throw new ReferenceError(`${node.name} is not defined`);
};

const evaluator = node => {
  if (node.type === 'CallExpression') return apply(node);
  if (node.type === 'Identifier') return getIdentifier(node);
  // is primitive
  if (node.value) return node.value;
};

module.exports = {
  evaluator
};
