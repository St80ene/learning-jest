const sendEmail = require('../src/sendEmail');

test('Return invalid email if email format is not valid', () => {
  const user = { id: 1, email: '@gmail.com' };
  expect(() => sendEmail(user)).toThrow('Invalid Email');
});

test('Return user not found error if user is not found', () => {
  const user = { id: 1, email: 'example1@gmail.com' };
  expect(() => sendEmail(user)).toThrow('User not found');
});
