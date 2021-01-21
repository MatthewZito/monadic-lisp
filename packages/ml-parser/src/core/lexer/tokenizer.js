const {
  isLetter,
  isWhitespace,
  isNumber,
  isParenthesis,
  isQuote
} = require('@/utils');

const tokenizer = input => {
  let cursor = 0;
  const tokens = [];

  while (cursor < input.length) {
    const char = input[cursor];

    if (isParenthesis(char)) {
      tokens.push({
        type: 'Parenthesis',
        value: char
      });

      cursor++;

      continue;
    }

    if (isWhitespace(char)) {
      cursor++;

      continue;
    }

    if (isNumber(char)) {
      let number = char;

      while (isNumber(input[++cursor])) {
        number += input[cursor];
      }

      tokens.push({
        type: 'Number',
        value: parseInt(number, 10)
      });

      continue;
    }

    if (isLetter(char)) {
      let symbol = char;

      while (isLetter(input[++cursor])) {
        symbol += input[cursor];
      }

      tokens.push({
        type: 'Name',
        value: symbol
      });

      continue;
    }

    if (isQuote(char)) {
      let string = '';

      while (!isQuote(input[++cursor])) {
        string += input[cursor];
      }

      tokens.push({
        type: 'String',
        value: string
      });

      cursor++;
      
      continue;
    }
  }

  return tokens;
};

module.exports = {
  tokenizer
};
