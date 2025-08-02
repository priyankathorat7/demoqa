const { faker } = require('@faker-js/faker');

const generateTestData = () => {
  const genderOptions = ['Male', 'Female', 'Other'];
  const randomGender = faker.helpers.arrayElement(genderOptions);
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    gender: randomGender,
    phone: faker.phone.number('##########'),
    address: faker.address.streetAddress(),
  };
};

module.exports = { generateTestData };
