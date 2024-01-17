/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
      this.result = 0;
  }

  add(number) {
      this.result += parseFloat(number);
  }

  subtract(number) {
      this.result -= parseFloat(number);
  }

  multiply(number) {
      this.result *= parseFloat(number);
  }

  divide(number) {
      const divisor = parseFloat(number);
      if (divisor === 0) {
          throw new Error("Cannot divide by zero");
      }
      this.result /= divisor;
  }

  clear() {
      this.result = 0;
  }

  getResult() {
      return this.result;
  }

  calculate(expression) {
      // Remove extra spaces using a regular expression
      const cleanedExpression = expression.replace(/\s+/g, ' ');

      // Validate expression for non-numeric characters
      if (!/^\s*-?\d+(\.\d+)?(\s*[-+*/]\s*-?\d+(\.\d+)?\s*)*$/.test(cleanedExpression)) {
          throw new Error("Invalid expression. Please provide a valid arithmetic expression.");
      }

      // Tokenize the expression and process each token
      const tokens = cleanedExpression.match(/[-+*/()]|\d+(\.\d+)?/g);

      // Use a stack to handle parentheses and operators
      const stack = [];
      
      for (const token of tokens) {
          if (token === '(') {
              stack.push('(');
          } else if (token === ')') {
              while (stack.length > 0 && stack[stack.length - 2] !== '(') {
                  this.performOperation(stack.pop());
              }
              stack.pop(); // Remove the opening parenthesis
          } else if (token in this) {
              while (stack.length > 0 && this.precedence(token) <= this.precedence(stack[stack.length - 2])) {
                  this.performOperation(stack.pop());
              }
              stack.push(token);
          } else {
              this.performOperation(token);
          }
      }

      // Process remaining operators in the stack
      while (stack.length > 0) {
          this.performOperation(stack.pop());
      }
  }

  performOperation(token) {
      if (token in this) {
          this[token](stack.pop());
      } else {
          this.add(token);
      }
  }

  precedence(operator) {
      const precedenceMap = { '+': 1, '-': 1, '*': 2, '/': 2 };
      return precedenceMap[operator] || 0;
  }
}

module.exports = Calculator;
