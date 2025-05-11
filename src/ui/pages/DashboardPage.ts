import { expect } from '@playwright/test';
import { Locator } from 'playwright';
import { BasePage } from './BasePage';

export default class DashboardPage extends BasePage {
  readonly pagePath: string = 'dashboard';
  readonly pageName: string = 'Dashboard page';

  readonly header: Locator = this.page.locator('.dashboard-header');

  async open(organizationId: string) {
    await this.openPageUrl(`${this.pagePath}/${organizationId}/team`, this.pageName);
    await this.assertIsOpened();
  }

  async assertIsOpened() {
    await expect(this.header, `${this.pageName} is not opened`).toBeVisible();
    await this.assertPageUrlIsOpened(this.pagePath);
  }
}
