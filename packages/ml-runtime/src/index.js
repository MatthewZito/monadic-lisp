require('module-alias/register');

const { parser, tokenizer } = require('../../ml-parser/src');

const { evaluator } = require('./eval');
const { pipe } = require('./utils');

console.log(pipe(tokenizer, parser, evaluator)('(multiply 3 (add 2 (add 3 (multiply 2 4 10))))')); // eslint-disable-line no-console

module.exports = {
  parseEval: pipe(tokenizer, parser, evaluator)
};
