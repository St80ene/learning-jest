const sendEmail = (user) => {
  const users = [
    { id: 1, email: 'example@gmail.com' },
    { id: 2, email: 'example2@gmail.com' },
    { id: 3, email: 'example3@gmail.com' },
    { id: 4, email: 'example4@gmail.com' },
    { id: 5, email: 'example5@gmail.com' },
  ];

  // validate the email
  const isValidEmailTest = isValidEmail(user.email);

  console.log({ isValidEmailTest });

  // If invalid email, send an error response

  if (!isValidEmailTest) {
    throw new Error('Invalid Email');
  }

  // check if user exists in a list of users
  const isValidUser = users.find((item) => item.email === user.email);

  // if user does not exist, send an error response

  if (!isValidUser) {
    throw new Error('User not found');
  }
  // send mail to user using the the email address
  console.log('Mail sent to inbox');
  return;
};

function isValidEmail(email) {
  if (!email) return false; // Check for null or undefined
  email = email.trim(); // Remove leading and trailing whitespace

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const user = { id: 1, email: 'example@gmail.com' };

sendEmail(user);

module.exports = sendEmail;
