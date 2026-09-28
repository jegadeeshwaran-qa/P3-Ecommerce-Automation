import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly addressName: Locator;
  readonly addressStreet: Locator;
  readonly addressCity: Locator;
  readonly addressState: Locator;
  readonly addressZip: Locator;
  readonly saveAddressButton: Locator;
  readonly cardNumber: Locator;
  readonly expiry: Locator;
  readonly cvv: Locator;
  readonly orderSuccess: Locator;

  constructor(page: Page) {
    this.page = page;

    this.addressName = page.getByTestId('ecom-address-name');
    this.addressStreet = page.getByTestId('ecom-address-street');
    this.addressCity = page.getByTestId('ecom-address-city');
    this.addressState = page.getByTestId('ecom-address-state');
    this.addressZip = page.getByTestId('ecom-address-zip');

    this.saveAddressButton = page.getByTestId('ecom-save-address');

    this.cardNumber = page.getByTestId('ecom-card-number');
    this.expiry = page.getByTestId('ecom-expiry');
    this.cvv = page.getByTestId('ecom-cvv');

    this.orderSuccess = page.getByTestId('ecom-order-success');
  }

  async fillAddress() {
    await this.addressName.fill('Test User');
    await this.addressStreet.fill('123 Test Street');
    await this.addressCity.fill('Singapore');
    await this.addressState.fill('Singapore');
    await this.addressZip.fill('123456');
  }

  async saveAddress() {
    await this.saveAddressButton.click();
  }

  async fillPaymentDetails() {
    await this.cardNumber.fill('4111111111111111');
    await this.expiry.fill('12/30');
    await this.cvv.fill('123');
  }
}