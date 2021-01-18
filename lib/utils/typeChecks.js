function contract (predicate) {
  return function (given) {
    if (predicate(given)) return true;
    throw new Error(`Contract violation`).message;
  };
}

function typeGenerative (obj, name) {
  obj[`is${name}`] = _ => toString.call(_) == `[object ${name}]`;
  obj[`requires${name}`] = contract(obj[`is${name}`]);
  return obj;
}

module.exports = [
  'Function',
  'String',
  'Number',
  'Array',
  'Object',
  'Boolean'
].reduce(typeGenerative, {});
