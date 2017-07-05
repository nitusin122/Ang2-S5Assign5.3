import { Ang2S5Assign5.3Page } from './app.po';

describe('ang2-s5-assign5.3 App', () => {
  let page: Ang2S5Assign5.3Page;

  beforeEach(() => {
    page = new Ang2S5Assign5.3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
