import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { PaymentModal } from '../modals/PaymentModal';

export default class CreatePaymentsPage extends BasePage {
  readonly pagePath: string = 'team_payments';
  readonly pageName: string = 'Projects page';

  readonly pageHeader = this.page.locator('.page-heading', { hasText: 'Send payments' });
  readonly selectMembersFld = this.page.locator('.select2-search__field');
  readonly selectedMembersPlaceholder = this.page.locator('.select2-selection__choice');
  readonly memberDropdownValues = this.page.locator('.select2-results__option');
  readonly amountPerMemberFld = this.page.locator('#team_payment_total_amount');
  readonly noteFld = this.page.locator('#team_payment_note');
  readonly createPaymentBtn = this.page.locator('.btn-bonus-payment-wizard-dialog');

  readonly paymentModal = new PaymentModal(this.page);

  async open(organizationId: string, paymentTab: PaymentTab = PaymentTab.PAY_FOR_HOURLS) {
    await this.openPageUrl(`organizations/${organizationId}/${this.pagePath}${paymentTab}`, this.pageName);
    await this.assertIsOpened();
    return this;
  }

  async assertIsOpened() {
    await expect(this.pageHeader, `${this.pageName} is not opened`).toBeVisible();
    await this.assertPageUrlIsOpened(this.pagePath);
  }

  async assertOneTimeAmountTabIsOpened() {
    await expect(this.selectMembersFld, `'One-time amount' tab is not opened`).toBeVisible();
  }

  async selectMember(memberFullName: string) {
    await this.selectMembersFld.click();
    const member = this.memberDropdownValues.filter({ hasText: memberFullName }).first();
    await expect(member, `Not found member with name: ${memberFullName}`).toBeVisible();
    await member.click();
    await this.selectMembersFld.click();
    await expect(this.selectedMembersPlaceholder).toContainText(memberFullName);
  }

  async fillPaymentFormManually(memberFullName: string, amountPerMember: string, note: string) {
    await this.selectMember(memberFullName);
    await this.amountPerMemberFld.fill(amountPerMember);
    await this.noteFld.fill(note);
  }

  async submitPaymentForm() {
    await this.createPaymentBtn.click();
    await this.paymentModal.assertIsOpened();
  }
}

export enum PaymentTab {
  PAY_FOR_HOURLS = '',
  APPROVED_TIMESHEETS = '/timesheets',
  ONE_TIME_AMOUNT = '/bonus',
}
