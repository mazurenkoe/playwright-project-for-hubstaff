import { BaseModal } from './BaseModal';
import { expect } from '@playwright/test';

export class PaymentModal extends BaseModal {
  readonly modalName: string = 'Payment';
  readonly modalBlockFirstStep = this.page.locator('#payment-wizard-modal');
  readonly modalBlockSecondStep = this.page.locator('#export-payment-modal');

  readonly modalTitle = this.modalBlockFirstStep.locator('.modal-title');
  readonly createPaymentBtn = this.modalBlockFirstStep.locator('.btn-primary');
  readonly notNowBtn = this.modalBlockSecondStep.locator('#export_payment [data-dismiss="modal"]');
  readonly exportTab = this.modalBlockSecondStep.locator('.export-tab');
  readonly sendTab = this.modalBlockSecondStep.locator('.send-tab');
  readonly completedPaymentProgressItem = this.modalBlockSecondStep.locator('.step-segments-wrapper .is-complete');
  readonly notificationMessage = this.page.locator('.jGrowl-message');

  async assertIsOpened() {
    await expect(this.modalTitle, `Modal title is wrong. Expected title is: ${this.modalName}`).toContainText(
      this.modalName
    );
  }

  async assertIsClosed() {
    await Promise.all([
      expect(this.modalBlockFirstStep, `Modal block hasn't been closed. First model step is opened`).toBeHidden(),
      expect(this.modalBlockSecondStep, `Modal block hasn't been closed. Second model step is opened`).toBeHidden(),
    ]);
  }

  async clickCreatePaymentBtn() {
    await this.createPaymentBtn.click();
    await this.assertIsOpened();
  }

  async clickNotNowBtn() {
    await this.notNowBtn.click();
    await this.assertIsClosed();
  }

  async assertPaymentConfirmationNitificationIsPresent() {
    await expect(this.notificationMessage).toContainText('Marked as paid');
  }

  async assertPaymentIscompleted() {
    await Promise.all([
      expect(this.completedPaymentProgressItem).toBeVisible(),
      expect(this.exportTab).toBeVisible(),
      expect(this.sendTab).toBeVisible(),
    ]);
  }
}
