import { test as base } from '@playwright/test';
import { Pages } from '../../src/ui/pages/Pages';
import { Components } from '../../src/ui/components/Components';
import { Modals } from '../../src/ui/modals/Modals';

export const test = base.extend<{
  pages: Pages;
  modals: Modals;
  components: Components;
}>({
  pages: async ({ page }, use) => {
    const pages = new Pages(page);
    await use(pages);
  },
  modals: async ({ page }, use) => {
    const modals = new Modals(page);
    await use(modals);
  },
  components: async ({ page }, use) => {
    const components = new Components(page);
    await use(components);
  },
});

export { expect } from '@playwright/test';
