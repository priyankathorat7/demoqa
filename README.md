# demoqa


Student Registration Form Automation

Automates the demoqa.com Student Registration Form using Playwright + JavaScript.

Features
- Page Object Model (POM)
- Dynamic data with faker.js
- Cross-browser: Chrome & Firefox
- Custom waits (no waitForTimeout)
- HTML report & screenshots on failure

Setup
git clone <your-repo-url>
cd playwright-form-test
npm install
npx playwright install

Run Tests
npx playwright test                # All browsers
npx playwright test --project=Chrome  # Only Chrome
npx playwright show-report         # View HTML report

Folder Structure
pages/         # Page Object
tests/         # Test scripts
utils/         # Dynamic data (faker)
test-data/     # Upload file

Test Data
- Name, Email, Phone: Dynamic
- DOB: 20 Apr 1990
- Subject: Maths | Hobbies: Sports, Reading
- Upload: test-image.jpg
- State: NCR | City: Delhi
