# Playwright TypeScript Project

This project is designed for automated ui and api testing using [Playwright](https://playwright.dev/) and TypeScript. It provides a robust framework for testing web applications across multiple browsers.


## Technologies
Test framework - Playwright

Language - TypeScript


## Prerequisites

Before you begin, ensure you have the following installed:

- [VS-code](https://code.visualstudio.com)
- [Node.js](https://nodejs.org/en/download)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

## Installation

1.Clone the repository:
    ```
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
    ```

2.Install dependencies:
    ```
   npm install
    ```
    
3.Install Playwright browsers:
    ```
   npx playwright install
    ```

## Running Tests

To run all tests:
    ```
   npx playwright test
    ```

To run tests in headed mode (with a visible browser):
    ```
   npx playwright test --headed
    ```

To run tests for a specific browser (e.g., Chrome):
    ```
   npx playwright test --project=chrome
    ```

To generate an HTML test report:
    ```
   npx playwright test --reporter=html
    ```

To run tests in a specific file:
    ```
   npx playwright test tests/example.spec.ts
    ```