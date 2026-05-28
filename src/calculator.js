#!/usr/bin/env node

'use strict';

/**
 * Supported calculator operations:
 * - addition (+)
 * - subtraction (-)
 * - multiplication (*)
 * - division (/)
 * - modulo (%)
 * - power (^)
 * - square root (sqrt)
 */

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }

  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed.');
  }

  return a % b;
}

function power(base, exponent) {
  return base ** exponent;
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of a negative number is not allowed.');
  }

  return Math.sqrt(n);
}

function calculate(a, operation, b) {
  switch (operation) {
    case '+':
    case 'add':
    case 'addition':
      return addition(a, b);
    case '-':
    case 'subtract':
    case 'subtraction':
      return subtraction(a, b);
    case '*':
    case 'x':
    case 'multiply':
    case 'multiplication':
      return multiplication(a, b);
    case '/':
    case 'divide':
    case 'division':
      return division(a, b);
    case '%':
    case 'mod':
    case 'modulo':
      return modulo(a, b);
    case '^':
    case '**':
    case 'power':
    case 'exponentiation':
      return power(a, b);
    case 'sqrt':
    case 'squareRoot':
    case 'square-root':
      return squareRoot(a);
    default:
      throw new Error(
        `Unsupported operation "${operation}". Use one of: +, -, *, /, %, ^, sqrt, addition, subtraction, multiplication, division, modulo, power, exponentiation, squareRoot.`
      );
  }
}

function parseNumber(value, label) {
  const parsedValue = Number(value);

  if (Number.isNaN(parsedValue)) {
    throw new Error(`${label} must be a valid number.`);
  }

  return parsedValue;
}

function printUsage() {
  console.log('Usage: node src/calculator.js <number> <operation> [number]');
  console.log('Example: node src/calculator.js 8 "*" 4');
  console.log('Example: node src/calculator.js 9 sqrt');
}

function isUnaryOperation(operation) {
  return ['sqrt', 'squareRoot', 'square-root'].includes(operation);
}

if (require.main === module) {
  try {
    const [, , firstArg, operation, secondArg] = process.argv;

    if (!firstArg || !operation || (!isUnaryOperation(operation) && !secondArg)) {
      printUsage();
      process.exitCode = 1;
    } else {
      const firstNumber = parseNumber(firstArg, 'The first value');
      const result = isUnaryOperation(operation)
        ? calculate(firstNumber, operation)
        : calculate(firstNumber, operation, parseNumber(secondArg, 'The second value'));

      console.log(result);
    }
  } catch (error) {
    console.error(error.message);
    printUsage();
    process.exitCode = 1;
  }
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
  calculate,
};
