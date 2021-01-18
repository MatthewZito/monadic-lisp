/* Utils */
const reducer = (acc, _) => acc.concat(_);
const lifted = group => [reducer, group.empty()];
const foldMap = group => (...args) => args.map(group).reduce(...lifted(group));
const identity = _ => _;
const is = type => _ => Object(_) instanceof type;

function typeGenerative (obj, name) {
  obj[`is${name}`] = _ => toString.call(_) == `[object ${name}]`;
  obj[`requires${name}`] = contract(obj[`is${name}`]);
  return obj;
}

function contract (predicate) {
  return function (given) {
    if (predicate(given)) return true;
    throw new Error(`Contract violation`).message;
  };
}

const test = [
	'Function',
	'String',
  'Number',
  'Array',
  'Object',
  'Boolean'
  ].reduce(typeGenerative, {});

const { 
  isFunction,
  requiresFunction,
  isString,
  requiresString,
  isNumber,
  requiresNumber,
  isArray,
  requiresArray,
  isObject,
  requiresObject,
  isBoolean,
  requiresBoolean
} = test;

module.exports = {
  foldMap,
  isFunction,
  requiresFunction,
  isString,
  requiresString,
  isNumber,
  requiresNumber,
  isArray,
  requiresArray,
  isObject,
  requiresObject,
  isBoolean,
  requiresBoolean
};