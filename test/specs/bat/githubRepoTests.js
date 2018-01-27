const expect = require('chai').expect;

describe('Browse Github Repo App', () => {
  it('Browse Github Repo App: Should load app the right title', () => {
    browser.url('http://localhost:3000/');
    browser.pause(3000);
    console.log(browser.isVisible("span.navbar-brand"));
    browser.pause(1000);
    //expect(actualTitle).to.eql('Todo List');
    expect(browser.isVisible("span.navbar-brand")).to.eql(true);
  });
});