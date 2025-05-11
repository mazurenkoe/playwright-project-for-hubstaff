import { expect } from '@playwright/test';
import { Locator } from 'playwright';
import { BasePage } from './BasePage';

export default class PaymentSummuryPage extends BasePage {
  readonly pagePath: string = 'team_payments';
  readonly pageName: string = 'Payment summary page';

  readonly header: Locator = this.page.locator('.blank-link', { hasText: 'Summary' });

  async open(paymentId: string) {
    await this.openPageUrl(`this.pagePath/${paymentId}`, this.pageName);
    await this.assertIsOpened();
  }

  async assertIsOpened() {
    await expect(this.header, `${this.pageName} is not opened`).toBeVisible();
    await this.assertPageUrlIsOpened(this.pagePath);
  }

  //добавить коммент, что это плохой меьтод
  async assertPaymentRecordIsCorrect(
    expectedMember: string,
    expectedRateType: RateType,
    expectHours: string,
    expectedPaymentStatus: PaymentStatus
  ) {
    await Promise.all([
      expect(
        this.page.locator('td', { hasText: expectedMember }).first(),
        `Member name '${expectedMember}' is missing in payment form`
      ).toBeVisible(),

      expect(
        this.page.locator('td', { hasText: expectedRateType }),
        `Rate type '${expectedRateType}' is missing in payment form`
      ).toBeVisible(),

      expect(
        this.page.locator('td', { hasText: expectHours }).first(),
        `Hours value '${expectHours}' is missing in payment form`
      ).toBeVisible(),

      expect(
        this.page.locator('td', { has: this.page.locator('.payment-label'), hasText: expectedPaymentStatus }),
        `Status '${expectedPaymentStatus}' is missing in payment form`
      ).toBeVisible(),
    ]);
  }
}

export enum RateType {
  BONUS = 'Bonus',
}

export enum PaymentStatus {
  PENDING = 'Pending',
}
