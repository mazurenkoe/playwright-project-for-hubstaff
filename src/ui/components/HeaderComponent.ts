import { Locator } from 'playwright';
import { BaseComponent } from './BaseComponent';
import SignupPage from '../pages/SignupPage';
import SigninPage from '../pages/SigninPage';

export class HeaderComponent extends BaseComponent {
  readonly freeTrialBtn: Locator = this.page.locator('.hsds-header-nav__primary-cta [href*="signup"]');
  readonly signInBtn: Locator = this.page.getByTestId('sign_in_button');

  readonly signupPage = new SignupPage(this.page);
  readonly loginPage = new SigninPage(this.page);

  async clickFreeTrialBtn() {
    await this.freeTrialBtn.click();
    await this.signupPage.assertIsOpened();
  }

  async clicksignInBtn() {
    await this.signInBtn.click();
    await this.loginPage.assertIsOpened();
  }
}
