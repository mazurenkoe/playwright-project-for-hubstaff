import { expect } from '@playwright/test';
import { Locator } from 'playwright';
import { BasePage } from './BasePage';

export default class SigninPage extends BasePage {
  readonly pagePath: string = 'login';
  readonly pageName: string = 'Signin page';

  readonly loginForm: Locator = this.page.locator('.new_user');
  readonly emailFld: Locator = this.page.locator('#user_email');
  readonly passwordFld: Locator = this.page.locator('#user_password');
  readonly signInBtn: Locator = this.page.locator('.sign-in>[type="submit"]');

  async open() {
    await this.openPageUrl(this.pagePath, this.pageName);
    await this.assertIsOpened();
  }

  async assertIsOpened() {
    await expect(this.loginForm, `${this.pageName} is not opened`).toBeVisible();
    await this.assertPageUrlIsOpened(this.pagePath);
  }

  async signIn(email: string, password: string) {
    await this.emailFld.fill(email);
    await this.passwordFld.fill(password);
    await this.signInBtn.click();
  }
}
