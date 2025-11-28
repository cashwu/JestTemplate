import {describe, test, expect, beforeEach} from 'vitest';
import {Calculator} from './calculator.js';

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('add', () => {
        test('adds two positive numbers', () => {
            expect(calculator.add(2, 3)).toBe(5);
        });

        test('adds positive and negative numbers', () => {
            expect(calculator.add(5, -3)).toBe(2);
        });

        test('adds zero', () => {
            expect(calculator.add(10, 0)).toBe(10);
        });
    });

    describe('subtract', () => {
        test('subtracts two numbers', () => {
            expect(calculator.subtract(5, 3)).toBe(2);
        });

        test('subtracts negative numbers', () => {
            expect(calculator.subtract(5, -3)).toBe(8);
        });
    });

    describe('multiply', () => {
        test('multiplies two numbers', () => {
            expect(calculator.multiply(4, 5)).toBe(20);
        });

        test('multiplies by zero', () => {
            expect(calculator.multiply(5, 0)).toBe(0);
        });

        test('multiplies negative numbers', () => {
            expect(calculator.multiply(-3, -4)).toBe(12);
        });
    });

    describe('divide', () => {
        test('divides two numbers', () => {
            expect(calculator.divide(10, 2)).toBe(5);
        });

        test('divides to decimal', () => {
            expect(calculator.divide(10, 4)).toBe(2.5);
        });

        test('throws error when dividing by zero', () => {
            expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero');
        });
    });
});
