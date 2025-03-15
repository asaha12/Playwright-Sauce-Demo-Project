# Playwright Sauce Demo

## Project Description
This project is an end-to-end (E2E) test automation suite for the [Sauce Demo](https://www.saucedemo.com/) website using Playwright. The test suite verifies various functionalities such as product selection, cart management, and checkout processes.

## Project Structure (Page Object Model - POM)
```
/playwright-sauce-demo
│── node_modules            # Project dependencies
│── pages
│   ├── cartPage.js          # Page Object for Cart Page
│   ├── checkoutPage.js      # Page Object for Checkout Page
│   ├── productPage.js       # Page Object for Product Page
│── playwright-report       # Folder containing test execution reports
│── test-results            # Folder storing test result artifacts
│── tests
│   ├── product.spec.js      # Test Suite for E2E Testing
│── .gitignore              # Git ignore file
│── package.json            # Node.js Package Configuration
│── package-lock.json       # Lock file for dependencies
│── playwright.config.js     # Playwright Configuration File
│── README.md               # Documentation
```

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Playwright](https://playwright.dev/)

## Installation
Clone the repository and install dependencies:
```sh
# Clone the repository
git clone https://github.com/asaha12/Playwright-Sauce-Demo-Project.git
cd Playwright-Sauce-Demo-Project

# Install dependencies
npm install
```

## Running the Tests
Run the test suite in headed mode using the following command:
```sh
npx playwright test product.spec.js --headed --project chromium --workers=1
```

## Generating and Viewing Reports
To generate the HTML report after test execution:
```sh
npx playwright show-report
```
This report contains detailed test execution logs, including screenshots and video recordings in case of failures.

### Sample Report Screenshot
![image](https://github.com/user-attachments/assets/c171ca36-bb2c-4963-8ed9-bbd52ceddb0a)



## Playwright Configuration
Modify `playwright.config.js` to customize browser settings, test retries, and timeouts.

## Author
- **Aditya Kumar Saha**


