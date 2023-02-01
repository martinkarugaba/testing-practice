describe('capitalize', () => {
  test('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
  test('capitalize', () => {
    expect(capitalize('my hello')).toBe('My hello');
  });
});

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
