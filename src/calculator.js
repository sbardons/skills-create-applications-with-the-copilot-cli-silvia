#!/usr/bin/env node

'use strict';

/**
 * Supported calculator operations:
 * - addition (+)
 * - subtraction (-)
 * - multiplication (*)
 * - division (/)
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
    default:
      throw new Error(
        `Unsupported operation "${operation}". Use one of: +, -, *, /, addition, subtraction, multiplication, division.`
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
  console.log('Usage: node src/calculator.js <number> <operation> <number>');
  console.log('Example: node src/calculator.js 8 "*" 4');
}

if (require.main === module) {
  try {
    const [, , firstArg, operation, secondArg] = process.argv;

    if (!firstArg || !operation || !secondArg) {
      printUsage();
      process.exitCode = 1;
    } else {
      const firstNumber = parseNumber(firstArg, 'The first value');
      const secondNumber = parseNumber(secondArg, 'The second value');
      const result = calculate(firstNumber, operation, secondNumber);

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
  calculate,
};
