import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/products.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';

test.describe('E-commerce Checkout Tests', () => {

  test('Checkout page opens from cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await productsPage.open();
    await productsPage.addToCart(2);

    await cartPage.openCart();
    await cartPage.proceedToCheckout();

    await expect(
      page.getByTestId('ecom-address-name')
    ).toBeVisible();
  });

  test('Checkout validation with missing required fields', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await productsPage.open();
    await productsPage.addToCart(2);

    await cartPage.openCart();
    await cartPage.proceedToCheckout();

    await checkoutPage.saveAddress();

    await expect(
      checkoutPage.addressName
    ).toBeVisible();
  });

});