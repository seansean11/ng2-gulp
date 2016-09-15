describe('App', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'NG2-Gulp';
    expect(subject).toEqual(result);
  });
});
