import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export default class VerifyEmailPage extends BasePage {
  readonly pagePath: string = 'confirmation_sent';
  readonly pageName: string = 'Verify your email page';

  readonly resendItBtn = this.page.locator('button', { hasText: 'Resend it' });

  async assertIsOpened() {
    await expect(this.resendItBtn, `${this.pageName} is not opened`).toBeVisible();
    await this.assertPageUrlIsOpened(this.pagePath);
  }
}
