'use strict';

const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
  calculate,
} = require('../calculator');

describe('calculator operations', () => {
  describe('addition', () => {
    test('adds the example values from the image', () => {
      expect(addition(2, 3)).toBe(5);
    });

    test('adds negative and decimal values', () => {
      expect(addition(-2, 3.5)).toBe(1.5);
    });
  });

  describe('subtraction', () => {
    test('subtracts the example values from the image', () => {
      expect(subtraction(10, 4)).toBe(6);
    });

    test('subtracts numbers resulting in a negative value', () => {
      expect(subtraction(4, 10)).toBe(-6);
    });
  });

  describe('multiplication', () => {
    test('multiplies the example values from the image', () => {
      expect(multiplication(45, 2)).toBe(90);
    });

    test('multiplies by zero', () => {
      expect(multiplication(45, 0)).toBe(0);
    });
  });

  describe('division', () => {
    test('divides the example values from the image', () => {
      expect(division(20, 5)).toBe(4);
    });

    test('returns decimal results when division is not even', () => {
      expect(division(7, 2)).toBe(3.5);
    });

    test('throws for division by zero', () => {
      expect(() => division(20, 0)).toThrow('Division by zero is not allowed.');
    });
  });

  describe('modulo', () => {
    test('matches the extended-operations image example for 5 % 2', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('returns the remainder of a division', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('throws for modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed.');
    });
  });

  describe('power', () => {
    test('matches the extended-operations image example for 2 ^ 3', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('raises the base to the exponent', () => {
      expect(power(2, 3)).toBe(8);
    });
  });

  describe('squareRoot', () => {
    test('matches the extended-operations image example for square root of 16', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('returns the square root of a number', () => {
      expect(squareRoot(9)).toBe(3);
    });

    test('returns zero for zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('throws for negative numbers', () => {
      expect(() => squareRoot(-9)).toThrow(
        'Square root of a negative number is not allowed.'
      );
    });
  });

  describe('calculate', () => {
    test('supports symbol operations', () => {
      expect(calculate(8, '+', 4)).toBe(12);
      expect(calculate(8, '-', 4)).toBe(4);
      expect(calculate(8, '*', 4)).toBe(32);
      expect(calculate(8, '/', 4)).toBe(2);
      expect(calculate(8, '%', 3)).toBe(2);
      expect(calculate(5, '%', 2)).toBe(1);
      expect(calculate(2, '^', 3)).toBe(8);
    });

    test('supports named operations', () => {
      expect(calculate(8, 'addition', 4)).toBe(12);
      expect(calculate(8, 'subtraction', 4)).toBe(4);
      expect(calculate(8, 'multiplication', 4)).toBe(32);
      expect(calculate(8, 'division', 4)).toBe(2);
      expect(calculate(10, 'modulo', 3)).toBe(1);
      expect(calculate(2, 'power', 3)).toBe(8);
      expect(calculate(9, 'sqrt')).toBe(3);
    });

    test('throws for unsupported operations', () => {
      expect(() => calculate(8, 'invalid', 4)).toThrow('Unsupported operation');
    });
  });
});
