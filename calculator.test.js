const calculator = require('./calculator')

test('Addition of two numbers should result', () => {
    expect(calculator.Addition('1','2')).toBe(3);
  });