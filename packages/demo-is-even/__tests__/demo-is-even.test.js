const {isEven} = require('../dist/demo-is-even.js');

test('isEven should return true', () => {
  expect(isEven(12)).toBe(true);
  expect(isEven(32)).toBe(true);
  expect(isEven(41)).toBe(false);
})