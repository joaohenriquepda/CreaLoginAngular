import { CreLoginAngularPage } from './app.po';

describe('cre-login-angular App', () => {
  let page: CreLoginAngularPage;

  beforeEach(() => {
    page = new CreLoginAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
