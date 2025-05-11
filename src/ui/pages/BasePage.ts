import { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openPageUrl(pagePath: string, pageName: string) {
    try {
      await this.page.goto(pagePath);
    } catch (error) {
      throw new Error(
        `Failed to navigate to "${pageName}" at "${pagePath}": ${error instanceof Error ? error.stack : String(error)}`
      );
    }
  }

  async assertPageUrlIsOpened(partOfUrl: string) {
    const partOfUrlWithEscapedSymbols = partOfUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`.*${partOfUrlWithEscapedSymbols}`);
    await expect(this.page, `The page is expected to contain utl '${partOfUrl}'`).toHaveURL(regex);
  }
}
