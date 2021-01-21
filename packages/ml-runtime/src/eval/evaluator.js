const { environment } = require('../stdlib');

const last = collection => collection[collection.length]; // eslint-disable-line no-unused-vars

function apply (node) {
  const fn = environment[node.name];
  const args = node.arguments.map(evaluator);
 
  if (typeof fn !== 'function') {
    throw new TypeError(`${node.name} is not a function`);
  }
  
  return fn(...args);
}

function getIdentifier (node) {
  if (environment[node.name]) return environment[node.name];
  throw new ReferenceError(`${node.name} is not defined`);
}

function evaluator (node) {
  if (node.type === 'CallExpression') return apply(node);
  if (node.type === 'Identifier') return getIdentifier(node);
  if (node.value) return node.value;
}

module.exports = {
  evaluator
};
