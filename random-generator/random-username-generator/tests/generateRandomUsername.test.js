const generateRandomUsername = require('../src/generateRandomUsername');

test('Generate a non-null username', () => {
    const username = generateRandomUsername();
    expect(username).toBeDefined();
    expect(username).not.toBeNull();
});

test('The username follows the format AdjectiveNounNumber', () => {
    const username = generateRandomUsername();
    const regex = /^[A-Z][a-z]+[A-Z][a-z]+\d{3}$/;
    expect(username).toMatch(regex);
});

test('The number is between 100 and 999', () => {
    const username = generateRandomUsername();
    const numberPart = parseInt(username.match(/\d{3}$/)[0], 10);
    expect(numberPart).toBeGreaterThanOrEqual(100);
    expect(numberPart).toBeLessThanOrEqual(999);
});
