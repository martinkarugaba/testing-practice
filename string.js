function stringLength(string) {
  if (string.length === 0) {
    throw new Error(
      'The input string must be atleast 1 character long'
    );
  }
  if (string.length > 10) {
    throw new Error(
      'The input string must not be longer than 10 characters'
    );
  }
  return string.length;
}

module.exports = stringLength;
