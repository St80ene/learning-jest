const subtract = require('../src/subtract');

test('subtracts two numbers', () => {
  expect(subtract(2, 1)).toBe(1);
});
