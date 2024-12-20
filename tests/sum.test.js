const sum = require('../src/sum');

describe('add two numbers', () => {
  test('add 1 and 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  // test case to check for negatives when adding
  test('add -1 and -2 to equal -3', () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  // test case to check if 0 plus 0 equals 0
  test('add 0 and 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
