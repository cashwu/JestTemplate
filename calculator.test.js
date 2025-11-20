const {describe, test, expect} = require('@jest/globals');
const {add, subtract, multiply, divide} = require('./calculator');

describe('Calculator', () => {
    describe('add', () => {
        test('adds two positive numbers', () => {
            expect(add(2, 3)).toBe(5);
        });

        test('adds positive and negative numbers', () => {
            expect(add(5, -3)).toBe(2);
        });

        test('adds zero', () => {
            expect(add(10, 0)).toBe(10);
        });
    });

    describe('subtract', () => {
        test('subtracts two numbers', () => {
            expect(subtract(5, 3)).toBe(2);
        });

        test('subtracts negative numbers', () => {
            expect(subtract(5, -3)).toBe(8);
        });
    });

    describe('multiply', () => {
        test('multiplies two numbers', () => {
            expect(multiply(4, 5)).toBe(20);
        });

        test('multiplies by zero', () => {
            expect(multiply(5, 0)).toBe(0);
        });

        test('multiplies negative numbers', () => {
            expect(multiply(-3, -4)).toBe(12);
        });
    });

    describe('divide', () => {
        test('divides two numbers', () => {
            expect(divide(10, 2)).toBe(5);
        });

        test('divides to decimal', () => {
            expect(divide(10, 4)).toBe(2.5);
        });

        test('throws error when dividing by zero', () => {
            expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
        });
    });
});
