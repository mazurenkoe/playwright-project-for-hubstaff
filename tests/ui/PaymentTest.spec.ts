import { ProjectConstants } from '../../src/ProjectConstants';
import { PaymentTab } from '../../src/ui/pages/CreatePaymentsPage';
import { PaymentStatus, RateType } from '../../src/ui/pages/PaymentSummuryPage';
import { test } from '../fixtures/test-fixture';

const AMOUNT = '100';
const NOTE = 'Test note';

test.beforeEach('Sign in with admin user', async ({ pages }) => {
  // It's a bad practice to use the login form in each authorized test.
  // Better approach: implement smart login — get a user token via the Hubstaff API and set it in browser cookies.
  await pages.signinPage.open();
  await pages.signinPage.signIn(ProjectConstants.DEFAULT_EMAIL, ProjectConstants.DEFAULT_PASSWORD);
  await pages.dashboardPage.assertIsOpened();

  await pages.createPaymentsPage.open(ProjectConstants.DEFAULT_ORGANISATION_ID, PaymentTab.ONE_TIME_AMOUNT);
  await pages.createPaymentsPage.assertOneTimeAmountTabIsOpened();
});

test('Create a team payment: one-time amount aka "bonus" payment', async ({ pages, modals }) => {
  await pages.createPaymentsPage.fillPaymentFormManually(ProjectConstants.DEFAULT_MEMBER_FULL_NAME, AMOUNT, NOTE);
  await pages.createPaymentsPage.submitPaymentForm();
  await modals.paymentModal.clickCreatePaymentBtn();
  await modals.paymentModal.assertPaymentConfirmationNitificationIsPresent();

  await modals.paymentModal.clickNotNowBtn();
  await pages.paymentSummuryPage.assertIsOpened();
  await pages.paymentSummuryPage.assertPaymentRecordIsCorrect(
    ProjectConstants.DEFAULT_MEMBER_FULL_NAME,
    RateType.BONUS,
    AMOUNT,
    PaymentStatus.PENDING
  );
});
