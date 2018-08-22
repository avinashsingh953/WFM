import { WFMPage } from './app.po';

describe('wfm App', () => {
  let page: WFMPage;

  beforeEach(() => {
    page = new WFMPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
