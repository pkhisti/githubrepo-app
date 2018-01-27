const expect = require('chai').expect;

describe('Browse Github Repo App', () => {
  it('Browse Github Repo App: Should load app the correct title', () => {
    browser.url('http://localhost:3000/');
    browser.pause(4000);
    expect(browser.getText("span.navbar-brand")).to.eql("Github Repo Browser");
  });

  it('Browse Github Repo App: should sort by name', () => {
    browser.pause(3000);
    browser.click("#drpSortBy");
    browser.pause(1000);
    browser.click("/html//div[@id='root']/div[@class='App']//ul[@role='menu']/li[1]");
    expect(browser.getText("[class='col-sm-12 div-min-height list-group-item']:nth-of-type(1) h3")).to.eql("aminator");
  });

   it('Browse Github Repo App: search another github repo', () => {
    browser.pause(3000);
    browser.setValue("/html//div[@id='root']/div[@class='App']//input[@value='']","intuit");
    browser.pause(4000);
    expect(browser.getText("div.row.list-group > div:first-child > div.row > div:nth-of-type(2) > div.header-min-height > h3")).to.eql("heirloom");
  });

  it('Browse Github Repo App: open commit modal for the first repo', () => {
    browser.pause(3000);
    browser.click("/html//div[@id='root']/div[@class='App']/div[@class='container']/div[2]/div[2]/div/div[1]/div[@class='row']/div[3]/button[@type='button']");
    expect(browser.isVisible("//body/div[@role='dialog']")).to.eql(true);
    browser.pause(1000);

  });

  it('Browse Github Repo App: should load latest commit data in the modal', () => {
    browser.pause(1000);
    expect(browser.isVisible("//body/div[@role='dialog']/div[@role='dialog']//div[@role='document']//ul[@class='list-group']/li[1]")).to.eql(true);
    browser.pause(1000);

  });
   it('Browse Github Repo App: should close the modal', () => {
    browser.pause(1000);
    browser.click("//body/div[@role='dialog']/div[@role='dialog']//div[@role='document']/div[@class='modal-header']/button[@type='button']");
    browser.pause(1000);
  });
});