import { DoctorShopPage } from './app.po';

describe('doctor-shop App', () => {
  let page: DoctorShopPage;

  beforeEach(() => {
    page = new DoctorShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
