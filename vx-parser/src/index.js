require('module-alias/register');

const { tokenizer } = require('@/core/lexer');
const { parser } = require('@/core/parser');

module.exports = {
  tokenizer,
  parser
};