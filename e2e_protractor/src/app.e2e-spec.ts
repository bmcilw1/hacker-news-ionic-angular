import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should contain header text', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toContain('Hacker News Ionic Angular');
  });
});
