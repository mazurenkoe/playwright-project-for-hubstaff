import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export default class MarketingMainPage extends BasePage {
  readonly pagePath: string = '';
  readonly pageName: string = 'Marketing Main page';

  readonly homePageLayout = this.page.locator('.home.has-hellobar');
  readonly createAccountBtn = this.page.getByTestId('create_account');

  async open() {
    await this.openPageUrl(this.pagePath, this.pageName);
    await this.assertIsOpened();
  }

  async assertIsOpened() {
    await expect(this.homePageLayout, `${this.pageName} is not opened`).toBeVisible();
  }
}
