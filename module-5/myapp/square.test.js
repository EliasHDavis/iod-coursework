const {square} = require('./square');
const {squareRoot} = require('./square')

describe('square', () => {
    test('correctly squares possitive numbers', () => {
        expect(square(5)).toBe(25);
    });

    test('correctly squares negative numbers', () => {
        expect(square(-12)).toBe(144);
    });

    test('throws error for string valus', () => {
        expect(square('apple')).toBe(NaN);
    });
});

describe('squareRoot', () => {
    test('correctly takes square root of possitive numbers', () => {
        expect(squareRoot(25)).toBe(5);
    });
})