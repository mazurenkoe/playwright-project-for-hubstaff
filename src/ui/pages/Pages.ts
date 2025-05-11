import { Page } from '@playwright/test';
import MarketingMainPage from './MarketingMainPage';
import SignupPage from './SignupPage';
import VerifyEmailPage from './VerifyEmailPage';
import SigninPage from './SigninPage';
import DashboardPage from './DashboardPage';
import ProjectsPage from './ProjectsPage';
import CreatePaymentsPage from './CreatePaymentsPage';
import PaymentSummuryPage from './PaymentSummuryPage';

export class Pages {
  readonly page: Page;
  readonly signinPage: SigninPage;
  readonly marketingMainPage: MarketingMainPage;
  readonly signupPage: SignupPage;
  readonly verifyEmailPage: VerifyEmailPage;
  readonly dashboardPage: DashboardPage;
  readonly projectsPage: ProjectsPage;
  readonly createPaymentsPage: CreatePaymentsPage;
  readonly paymentSummuryPage: PaymentSummuryPage;

  constructor(page: Page) {
    this.page = page;
    this.createPaymentsPage = new CreatePaymentsPage(this.page);
    this.signinPage = new SigninPage(this.page);
    this.marketingMainPage = new MarketingMainPage(this.page);
    this.signupPage = new SignupPage(this.page);
    this.verifyEmailPage = new VerifyEmailPage(this.page);
    this.dashboardPage = new DashboardPage(this.page);
    this.projectsPage = new ProjectsPage(this.page);
    this.paymentSummuryPage = new PaymentSummuryPage(this.page);
  }
}
