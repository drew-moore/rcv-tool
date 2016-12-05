import { browser, element, by } from 'protractor';

export class RcvAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rcv-root h1')).getText();
  }
}
