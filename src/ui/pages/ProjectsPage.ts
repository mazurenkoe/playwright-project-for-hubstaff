import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { NewProjectModal } from '../modals/NewProjectModal';

export default class ProjectsPage extends BasePage {
  readonly pagePath: string = 'projects';
  readonly pageName: string = 'Projects page';

  readonly pageHeader = this.page.locator('.page-heading', { hasText: 'Projects' });
  readonly addProjectBtn = this.page.locator('.btn', { hasText: 'Add project' });
  readonly notificationMessage = this.page.locator('.jGrowl-message');
  readonly projectItems = this.page.locator('.project-name');

  readonly addProjectModal = new NewProjectModal(this.page);

  async open(organizationId: string) {
    await this.openPageUrl(`organizations/${organizationId}/${this.pagePath}?status=active`, this.pageName);
    await this.assertIsOpened();
  }

  async assertIsOpened() {
    await expect(this.pageHeader, `${this.pageName} is not opened`).toBeVisible();
    await this.assertPageUrlIsOpened(this.pagePath);
  }

  async addProject(name: string) {
    await this.addProjectBtn.click();
    await this.addProjectModal.assertIsOpened();
    await this.addProjectModal.addProjectNameFld.fill(name);
    await this.addProjectModal.savetBtn.click();
    await this.addProjectModal.assertIsClosed();
    await expect(this.notificationMessage).toContainText('Project created');
  }

  async assertProjectIsPresent(projectName: string) {
    await expect(
      this.projectItems.filter({ hasText: projectName }).first(),
      `Not found project with name: ${projectName}`
    ).toBeVisible();
  }
}
