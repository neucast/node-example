const sum = require('./greet');

test('greet', () => {
    expect(greet()).toBe("Hello!");
});
