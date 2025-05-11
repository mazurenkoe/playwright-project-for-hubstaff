import { Page } from '@playwright/test';
import { PaymentModal } from './PaymentModal';
import { NewProjectModal } from './NewProjectModal';

export class Modals {
  readonly page: Page;
  readonly paymentModal: PaymentModal;
  readonly addProjectModal: NewProjectModal;

  constructor(page: Page) {
    this.page = page;
    this.paymentModal = new PaymentModal(this.page);
    this.addProjectModal = new NewProjectModal(this.page);
  }
}
