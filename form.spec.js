const { test, expect } = require('@playwright/test');
const { RegistrationFormPage } = require('../demoqa/registrationForm.page');
const { generateTestData } = require('../demoqa/testData');

test('Fill and submit student registration form', async ({ page }) => {
  const formPage = new RegistrationFormPage(page);
  const testData = generateTestData();

  await page.goto('https://demoqa.com/automation-practice-form');
  await formPage.removeAds();
  await formPage.fillForm(testData);
  await formPage.validateModal(testData);
});
