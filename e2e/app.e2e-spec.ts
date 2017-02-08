import { PersonalcardAngular2Page } from './app.po';

describe('personalcard-angular2 App', function() {
  let page: PersonalcardAngular2Page;

  beforeEach(() => {
    page = new PersonalcardAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
