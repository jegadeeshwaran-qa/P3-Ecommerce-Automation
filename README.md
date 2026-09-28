# P3 - E-commerce UI Automation

## Overview

This project automates basic e-commerce user flows using Playwright with TypeScript.

The project covers product search, product details, shopping cart and checkout validation.

## Application Under Test

QA Practice - E-commerce Practice Website

URL: https://www.qapractice.com/practice-ecommerece-website

## Tech Stack

- Playwright
- TypeScript
- Node.js
- VS Code

## Test Scenarios

### Product Search

- Search for a valid product
- Search for an invalid product
- Filter products by category
- Sort products by price
- Search using test data

### Shopping Cart

- Open product details
- Add product to cart
- Remove product from cart

### Checkout

- Open checkout page from cart
- Validate checkout with missing required fields

## Automation Approach

- Page Object Model (POM)
- Playwright locators
- Assertions
- Basic data-driven testing
- Cross-browser execution

## Project Structure

```text
P3-Ecommerce-Automation/
├── pages/
│   ├── products.page.ts
│   ├── cart.page.ts
│   └── checkout.page.ts
├── tests/
│   ├── product-search.spec.ts
│   ├── cart.spec.ts
│   └── checkout.spec.ts
├── test-data/
│   └── products.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
├── README.md
└── .gitignore