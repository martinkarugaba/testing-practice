test('check for reversed string', () => {
  expect(reverseString('Hello')).toMatch('olleH');
});

function reverseString(string) {
  return string.split('').reverse().join('');
}
