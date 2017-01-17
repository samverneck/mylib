import { BoMapsPage } from './app.po';

describe('bo-maps App', function() {
  let page: BoMapsPage;

  beforeEach(() => {
    page = new BoMapsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
