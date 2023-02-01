const stringLength = require('./string');

// test 1
test('returns the length of a string', () => {
  expect(stringLength('bob')).toBe(3);
});

// test 2
test('check if input string is at least 1 character long', () => {
  expect(() => stringLength('')).toThrow('The input string must be atleast 1 character long');
});

// test 3
test('check if input string is longer than 10 characters', () => {
  expect(() => stringLength('Hello there here')).toThrow(
    'The input string must not be longer than 10 characters'
  );
});
