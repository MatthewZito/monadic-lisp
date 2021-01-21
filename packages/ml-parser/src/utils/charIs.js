const { CHARACTERS, EXPRESSIONS } = require('../constants');

const isLetter = char => EXPRESSIONS.LETTER.test(char);

const isWhitespace = char => EXPRESSIONS.WHITESPACE.test(char);

const isNumber = char => EXPRESSIONS.NUMBER.test(char);

const isOpenParenthesis = char => char === CHARACTERS.OPEN_PAREN;

const isCloseParenthesis = char => char === CHARACTERS.CLOSE_PAREN;

const isParenthesis = char => isOpenParenthesis(char) || isCloseParenthesis(char);

const isQuote = char => char === CHARACTERS.QUOTE;

const isOperator = char => CHARACTERS.OPERATORS.includes(char);

module.exports = {
  isLetter,
  isWhitespace,
  isNumber,
  isOpenParenthesis,
  isCloseParenthesis,
  isParenthesis,
  isQuote,
  isOperator
};
