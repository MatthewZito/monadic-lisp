const {
  isLetter,
  isWhitespace,
  isNumber,
  isOpenParenthesis,
  isCloseParenthesis,
  isParenthesis,
  isQuote,
  isOperator
} = require('./charIs');

const { peek, pop } = require('./navigate');

module.exports = {
  isLetter,
  isWhitespace,
  isNumber,
  isOpenParenthesis,
  isCloseParenthesis,
  isParenthesis,
  isQuote,
  isOperator,
  peek,
  pop
};
