const reverseString = require('./reverseString');

test('check for reversed string', () => {
  expect(reverseString('Hello')).toMatch('olleH');
});
