
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})

test('adds -3 + 2 to equal -1', () => {
    expect(sum(-3,2)).toBe(-1);
})

test('adds 7 + 10 to equal 17', () => {
    expect(sum(7,10)).toBe(17);
})