const add = (a, b) => {
    return a + b;
};

test('add', () => {
    expect(add(3, 5)).toBe(8);
});
