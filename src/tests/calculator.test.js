'use strict';

const {
  addition,
  subtraction,
  multiplication,
  division,
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

  describe('calculate', () => {
    test('supports symbol operations', () => {
      expect(calculate(8, '+', 4)).toBe(12);
      expect(calculate(8, '-', 4)).toBe(4);
      expect(calculate(8, '*', 4)).toBe(32);
      expect(calculate(8, '/', 4)).toBe(2);
    });

    test('supports named operations', () => {
      expect(calculate(8, 'addition', 4)).toBe(12);
      expect(calculate(8, 'subtraction', 4)).toBe(4);
      expect(calculate(8, 'multiplication', 4)).toBe(32);
      expect(calculate(8, 'division', 4)).toBe(2);
    });

    test('throws for unsupported operations', () => {
      expect(() => calculate(8, '%', 4)).toThrow('Unsupported operation');
    });
  });
});
