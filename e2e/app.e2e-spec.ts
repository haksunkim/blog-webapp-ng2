import { BlogWebappNg2Page } from './app.po';

describe('blog-webapp-ng2 App', () => {
  let page: BlogWebappNg2Page;

  beforeEach(() => {
    page = new BlogWebappNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
