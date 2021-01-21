const { parser, tokenizer } = require('@monadic-lisp/parser');

const { evaluator } = require('./eval');
const { pipe } = require('./utils');

console.log(pipe(tokenizer, parser, evaluator)('(multiply 3 (add 2 (add 3 (multiply 2 4 10))))')); // eslint-disable-line no-console

module.exports = {
  parseEval: pipe(tokenizer, parser, evaluator)
};
