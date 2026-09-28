import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.getByTestId('ecom-proceed-to-buy');
  }

  async openCart() {
    await this.page.getByTestId('ecom-cart-button').click();
  }

  async removeProduct(productId: number) {
    await this.page
      .getByTestId(`remove-from-cart-${productId}`)
      .click();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}