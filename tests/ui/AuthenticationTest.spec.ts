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
  /* I didn't implement the part with receiving the letter by mail because, to do so, I need to:
  - Investigate and choose a mail service that supports receiving emails via API.
  - Request a specific domain address in the mail service that will not be blocked by your website.
  - Implement an API to work with the mail service in the current framework.
    This requires a lot of time, and these mail services are paid. */
});

test('Sig in from the Marketing page navigation bar', async ({ pages, components }) => {
  await pages.marketingMainPage.open();
  await components.headerComponent.clicksignInBtn();
  await pages.signinPage.signIn(ProjectConstants.DEFAULT_EMAIL, ProjectConstants.DEFAULT_PASSWORD);
  await pages.dashboardPage.assertIsOpened();
});
