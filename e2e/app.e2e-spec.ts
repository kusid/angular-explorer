import { AngularExplorerPage } from './app.po';

describe('angular-explorer App', () => {
  let page: AngularExplorerPage;

  beforeEach(() => {
    page = new AngularExplorerPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
