import { Page } from '@playwright/test';

export class BaseModal {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
}
