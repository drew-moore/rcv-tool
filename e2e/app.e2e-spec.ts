import { RcvAppPage } from './app.po';

describe('rcv-app App', function() {
  let page: RcvAppPage;

  beforeEach(() => {
    page = new RcvAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rcv works!');
  });
});
