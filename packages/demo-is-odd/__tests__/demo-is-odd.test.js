const {isOdd} = require('../dist/demo-is-odd.js');

test('isOdd should return true', () => {
  expect(isOdd(1)).toBe(true);
  expect(isOdd(3)).toBe(true);
})


test('isOdd should return false', () => {
    expect(isOdd(4)).toBe(false);
    expect(isOdd(12)).toBe(false);
    expect(isOdd(132)).toBe(false);
    expect(isOdd(14)).toBe(false);
  })

