const { 
  Sum,
  Difference, 
  Product,
  Self
} = require('@monadic-lisp/core');

const { parseEval } = require('../src');

describe('Evaluation of runtime evaluator pipeline', () => {
  describe('Evaluation of applied recursion', () => {
    // it('should resort to returning a primitive numeric Just', () => {
    //   const arg = 10;
    //   const expression = `${arg}`;

    //   const result = parseEval(expression);

    //   expect(result)
    //     .toHaveProperty('concat');
      
    //   expect(result)
    //     .toBe(arg);
    // });

    it('should evaluate simple expressions', () => {
      const expression = `(add 2 4)`

      const result = parseEval(expression);

      expect(result)
        .toHaveProperty('x');

      expect(result.x)
        .toBe(6);
    });

    it('should evaluate nested expressions', () => {
      const expression = '(multiply 3 (add 2 (add 3 (multiply 2 4 10))))';

      const result = parseEval(expression);
      
      expect(result)
        .toHaveProperty('x');

      expect(result.x)
        .toBe(255);
    });
  });

  // describe('Evaluation of standard library applications', () => {
  //   it('should perform identifier lookups via the environment', () => {
  //     const ast = { type: 'Identifier', name: 'pi' };
  //     expect(evaluator(ast))
  //       .toBe(Math.PI);
  //   });

  //   it('should find the largest number in a given range', () => {
  //     const ast = {
  //       type: 'CallExpression',
  //       name: 'max',
  //       arguments: [
  //         { type: 'NumericLiteral', value: 6 },
  //         { type: 'NumericLiteral', value: 3 },
  //         { type: 'NumericLiteral', value: 9 },
  //         { type: 'NumericLiteral', value: 2 }
  //       ]
  //     };
  //     expect(evaluator(ast))
  //       .toBe(9);
  //   });

  //   it('should find the smallest number in a given range', () => {
  //     const ast = {
  //       type: 'CallExpression',
  //       name: 'min',
  //       arguments: [
  //         { type: 'NumericLiteral', value: 6 },
  //         { type: 'NumericLiteral', value: 3 },
  //         { type: 'NumericLiteral', value: 9 },
  //         { type: 'NumericLiteral', value: 2 }
  //       ]
  //     };
  //     expect(evaluator(ast))
  //       .toBe(2);
  //   });
  // });
});