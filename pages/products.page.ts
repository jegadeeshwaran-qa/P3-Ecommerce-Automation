import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly sortDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.getByTestId('ecom-search');
    this.sortDropdown = page.getByTestId('ecom-sort');
  }

  async open() {
    await this.page.goto(
      'https://www.qapractice.com/practice-ecommerece-website'
    );
  }

  async searchProduct(productName: string) {
    await this.searchBox.fill(productName);
  }

  async selectCategory(category: string) {
    await this.page.getByTestId(`ecom-category-${category}`).click();
  }

  async sortByPriceLowToHigh() {
    await this.sortDropdown.selectOption('price-asc');
  }

  async openProduct(productId: number) {
    await this.page.getByTestId(`view-product-${productId}`).click();
  }

  async addToCart(productId: number, quantity: string = '1') {
    await this.page.getByTestId(`quantity-${productId}`).fill(quantity);
    await this.page.getByTestId(`add-to-cart-${productId}`).click();
  }

  async openCart() {
    await this.page.getByTestId('ecom-cart-button').click();
  }
}