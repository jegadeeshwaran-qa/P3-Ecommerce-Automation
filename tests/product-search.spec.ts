import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/products.page';
import { products } from '../test-data/products';

test.describe('E-commerce Product Tests', () => {

  test('Search product successfully', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.open();
    await productsPage.searchProduct('mouse');

    await expect(
      page.getByTestId('view-product-2')
    ).toBeVisible();
  });

  test('Search invalid product', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.open();
    await productsPage.searchProduct('xyz123');

    await expect(page.getByText(/no products/i)).toBeVisible();
  });

  test('Filter products by category', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.open();
    await productsPage.selectCategory('fashion');

    await expect(
      page.getByTestId('ecom-category-fashion')
    ).toBeVisible();
  });

  test('Sort products by price', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.open();
    await productsPage.sortByPriceLowToHigh();

    await expect(productsPage.sortDropdown).toHaveValue('price-asc');
  });

  test('Search using test data', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    for (const product of products) {
      await productsPage.open();
      await productsPage.searchProduct(product);

      await expect(productsPage.searchBox).toHaveValue(product);
    }
  });

});