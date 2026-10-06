# P3 - E-commerce Automation

Playwright + TypeScript UI automation project for testing e-commerce user flows.

## Project Overview

This project covers product search, product details, shopping cart, and checkout validation.

## Application Under Test

QA Practice – E-commerce Practice Website

https://www.qapractice.com/practice-ecommerece-website

## Tools and Technologies

- Playwright
- TypeScript
- Node.js
- Page Object Model
- GitHub Actions

## Test Coverage

### Product Search

- Search for a valid product
- Search for an invalid product
- Filter products by category
- Sort products by price
- Search using test data

### Shopping Cart

- Open product details
- Add a product to the cart
- Remove a product from the cart

### Checkout

- Open the checkout page from the cart
- Validate checkout with missing required fields

## Automation Approach

The project uses the Page Object Model to keep page locators and reusable actions separate from test cases.

The tests include:

- Playwright locators
- Assertions
- Basic data-driven testing
- Positive and negative scenarios
- Cross-browser execution

## Project Structure

```text
P3-Ecommerce-Automation/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── pages/
│   ├── cart.page.ts
│   ├── checkout.page.ts
│   └── products.page.ts
├── test-data/
│   └── products.ts
├── tests/
│   ├── cart.spec.ts
│   ├── checkout.spec.ts
│   └── product-search.spec.ts
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

## Test Execution

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run all tests:

```bash
npx playwright test
```

Run tests on Chromium:

```bash
npx playwright test --project=chromium
```

## GitHub Actions CI

GitHub Actions is configured to:

1. Check out the repository
2. Install npm dependencies
3. Install Playwright browsers
4. Run the Playwright test suite

## What I Practiced

- UI automation using Playwright and TypeScript
- E-commerce workflow testing
- Page Object Model
- Basic data-driven testing
- Shopping cart and checkout validation
- GitHub Actions CI
