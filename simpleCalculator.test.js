// test add
describe('Calculator add', () => {
  test('add', () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });
  test('add 0', () => {
    expect(Calculator.add(1, 0)).toBe(1);
  });
  test('add large', () => {
    expect(Calculator.add(100, 50)).toBe(150);
  });
  test('add negative', () => {
    expect(Calculator.add(1, -2)).toBe(-1);
  });
});

// test subtract
describe('Calculator subtract', () => {
  test('subtract', () => {
    expect(Calculator.subtract(1, 2)).toBe(-1);
  });
  test('subtract negative from negative', () => {
    expect(Calculator.subtract(-1, -2)).toBe(1);
  });
  test('addsubtract large from small', () => {
    expect(Calculator.subtract(100, 50)).toBe(50);
  });
  test('subtract negative from positive', () => {
    expect(Calculator.subtract(1, -2)).toBe(3);
  });
});

// test divide
describe('Calculator divide', () => {
  test('subtract', () => {
    expect(Calculator.divide(4, 2)).toBe(2);
  });
  test('subtract negative from negative', () => {
    expect(Calculator.divide(-1, -2)).toBe(0.5);
  });
  test('addsubtract large from small', () => {
    expect(() => Calculator.divide(100, 0)).toThrow(
      'Cannot divide by 0'
    );
  });
  test('subtract negative from positive', () => {
    expect(() => Calculator.divide(100, 0)).toThrow(
      'Cannot divide by 0'
    );
  });
});

// test multiply
describe('Calculator multiply', () => {
  test('multiply', () => {
    expect(Calculator.multiply(1, 2)).toBe(2);
  });
  test('multiply by 0', () => {
    expect(Calculator.multiply(1, 0)).toBe(0);
  });
  test('multiply by 0', () => {
    expect(Calculator.multiply(0, 50)).toBe(0);
  });
  test('myltiply by a negative', () => {
    expect(Calculator.multiply(1, -2)).toBe(-2);
  });
});

class Calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static divide(a, b) {
    if (a === 0) {
      throw new Error('Cannot divide by 0');
    }
    if (b === 0) {
      throw new Error('Cannot divide by 0');
    }
    return a / b;
  }

  static multiply(a, b) {
    return a * b;
  }
}
