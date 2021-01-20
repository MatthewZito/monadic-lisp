const { requiresNumber, requiresBoolean } = require('./typeChecks');

/* Utils */
const reducer = (acc, _) => acc.concat(_);
const lifted = group => [reducer, group.empty()];
const foldMap = group => (...args) => args.map(group).reduce(...lifted(group));
const identity = _ => _;
const is = type => _ => Object(_) instanceof type;

module.exports = {
  foldMap,
  requiresNumber,
  requiresBoolean
};