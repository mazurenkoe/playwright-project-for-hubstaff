import { expect } from '@playwright/test';
import { Locator } from 'playwright';
import { BasePage } from './BasePage';
import VerifyEmailPage from './VerifyEmailPage';

export default class SignupPage extends BasePage {
  readonly pagePath: string = 'signup';
  readonly pageName: string = 'Signup page';

  readonly signupForm: Locator = this.page.locator('.hsds-signup__container');
  readonly firstNameFld: Locator = this.page.getByTestId('first_name');
  readonly lastNameFld: Locator = this.page.getByTestId('last_name');
  readonly emailFld: Locator = this.page.getByTestId('email');
  readonly passwordFld: Locator = this.page.getByTestId('password');
  readonly acceptTermsCheckbox: Locator = this.page.locator('.hsds-form__checkbox-icon');
  readonly signupBtn: Locator = this.page.getByTestId('create_my_account');
  readonly cookieOkBtn = this.page.locator('#CybotCookiebotDialogBodyLevelButtonAccept');

  readonly verifyEmailPage = new VerifyEmailPage(this.page);

  async open() {
    await this.openPageUrl(this.pagePath, this.pageName);
    await this.assertIsOpened();
  }

  async assertIsOpened() {
    await expect(this.signupForm, `${this.pageName} is not opened`).toBeVisible();
    await this.assertPageUrlIsOpened(this.pagePath);
  }

  async fillAndSubmitForm(firstName: string, lastName: string, email: string, password: string) {
    await this.submitCookie();
    await this.firstNameFld.fill(firstName);
    await this.lastNameFld.fill(lastName);
    await this.emailFld.fill(email);
    await this.passwordFld.fill(password);
    await this.acceptTermsCheckbox.scrollIntoViewIfNeeded();
    await this.acceptTermsCheckbox.check();
    await this.signupBtn.click();
  }

  async submitCookie() {
    await this.cookieOkBtn.click();
    expect(this.cookieOkBtn, `Cookie bunner hasn't been closed`).toBeHidden();
  }
}
