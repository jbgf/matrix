import { MatrixPage } from './app.po';

describe('matrix App', () => {
  let page: MatrixPage;

  beforeEach(() => {
    page = new MatrixPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
