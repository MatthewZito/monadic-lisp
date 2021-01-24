const { 
  requiresNumber, 
  requiresBoolean, 
  isNumber
} = require('./typeChecks');

/* Utils */
const reducer = (acc, _) => acc.concat(_);
const lifted = group => [reducer, group.empty()];
const foldMap = group => (...args) => args.map(group).reduce(...lifted(group));
const identity = _ => _; // eslint-disable-line no-unused-vars
const is = type => _ => Object(_) instanceof type; // eslint-disable-line no-unused-vars

module.exports = {
  foldMap,
  requiresNumber,
  requiresBoolean,
  isNumber
};