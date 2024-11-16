const cloneArray = require('../src/cloneArray');

test('properly clones array', () => {
  const exampleArray = [1, 2, 3];
  expect(cloneArray(exampleArray)).toEqual(exampleArray);
  expect(cloneArray(exampleArray)).not.toBe(exampleArray);
});
