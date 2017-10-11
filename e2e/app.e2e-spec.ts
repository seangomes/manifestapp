import { ManifestappPage } from './app.po';

describe('manifestapp App', () => {
  let page: ManifestappPage;

  beforeEach(() => {
    page = new ManifestappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
