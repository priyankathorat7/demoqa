# demoqa


Student Registration Form Automation

Automates the demoqa.com Student Registration Form using Playwright + JavaScript.

Features
- Page Object Model (POM)
- Cross-browser: Chrome & Firefox
- HTML report & screenshots on failure

Setup
git clone <repo-url>
npm install
npx playwright install

Run Tests
npx playwright test                # All browsers
npx playwright test --project=Chrome  # Only Chrome
npx playwright show-report         # View HTML report

