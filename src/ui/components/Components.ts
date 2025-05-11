import { Page } from '@playwright/test';
import { HeaderComponent } from './HeaderComponent';

export class Components {
  readonly page: Page;
  readonly headerComponent: HeaderComponent;

  constructor(page: Page) {
    this.page = page;
    this.headerComponent = new HeaderComponent(this.page);
  }
}
