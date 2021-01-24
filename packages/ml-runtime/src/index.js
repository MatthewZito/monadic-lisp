const { parser, tokenizer } = require('@monadic-lisp/parser');

const { evaluator } = require('./eval');
const { pipe } = require('./utils');

module.exports = {
  parseEval: pipe(tokenizer, parser, evaluator)
};
