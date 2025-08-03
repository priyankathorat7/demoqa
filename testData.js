const { faker } = require('@faker-js/faker');

const generateTestData = () => {
  return {
    firstName: 'Test',
    lastName: 'User',
    email: 'testuser@example.com',
    gender: 'Female',
    phone: '9876543210',
    address: '123 Main Street, Delhi',
  };
};

module.exports = { generateTestData };
