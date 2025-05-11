import { Generator } from '../../src/utils/Generator';
import { ProjectConstants } from '../../src/ProjectConstants';
import { test } from '../fixtures/test-fixture';

const PROJECT_NAME = Generator.generateProjectName();

test.beforeEach('Sign in with admin user', async ({ pages }) => {
  // It's a bad practice to use the login form in each authorized test.
  // Better approach: implement smart login — get a user token via the Hubstaff API and set it in browser cookies.
  await pages.signinPage.open();
  await pages.signinPage.signIn(ProjectConstants.DEFAULT_EMAIL, ProjectConstants.DEFAULT_PASSWORD);
  await pages.dashboardPage.assertIsOpened();
  
  await pages.projectsPage.open(ProjectConstants.DEFAULT_ORGANISATION_ID);
});

test('Add/create project', async ({ pages }) => {
  await pages.projectsPage.addProject(PROJECT_NAME);
  await pages.projectsPage.assertProjectIsPresent(PROJECT_NAME);
});
