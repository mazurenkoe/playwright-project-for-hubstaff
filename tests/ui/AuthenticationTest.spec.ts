import { ProjectConstants } from '../../src/ProjectConstants';
import { Generator } from '../../src/utils/Generator';
import { test } from '../fixtures/test-fixture';

test('Sign up for the 14-day free trial', async ({ pages, components }) => {
  await pages.marketingMainPage.open();
  await components.headerComponent.clickFreeTrialBtn();
  await pages.signupPage.fillAndSubmitForm(
    'Firsttestname',
    'Secondtestname',
    Generator.generateEmail('signup'),
    ProjectConstants.DEFAULT_PASSWORD
  );
  await pages.verifyEmailPage.assertIsOpened();
});

test('Sig in from the Marketing page navigation bar', async ({ pages, components }) => {
  await pages.marketingMainPage.open();
  await components.headerComponent.clicksignInBtn();
  await pages.signinPage.signIn(ProjectConstants.DEFAULT_EMAIL, ProjectConstants.DEFAULT_PASSWORD);
  await pages.dashboardPage.assertIsOpened();
});
