import { BaseModal } from './BaseModal';
import { expect } from '@playwright/test';

export class NewProjectModal extends BaseModal {
  readonly modalName: string = 'New Project modal';

  readonly modalBlock = this.page.locator('.project-dialog.opened');
  readonly addProjectNameFld = this.modalBlock.locator('textarea[placeholder*="Add project names"]');
  readonly savetBtn = this.modalBlock.locator('.btn-primary', { hasText: 'Save' });

  async assertIsOpened() {
    await expect(this.modalBlock, `${this.modalName} is not opened`).toBeVisible();
  }

  async assertIsClosed() {
    await expect(this.modalBlock, `${this.modalName} is not opened`).toBeHidden();
  }
}
