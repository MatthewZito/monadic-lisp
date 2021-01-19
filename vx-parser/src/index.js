const { tokenizer } = require('../lexer');
const { parser } = require('../parser');
const { evaluator } = require('../environment');
const { pipe } = require('../utils');

module.exports = {
  parseEval: pipe(tokenizer, parser, evaluator)
};
