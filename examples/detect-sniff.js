'use strict';

const puppeteer = require('puppeteer');

function sniffDetector() {
  const userAgent = window.navigator.userAgent;
  const platform = window.navigator.platform;

  window.navigator.__defineGetter__('userAgent', function() {
    window.navigator.sniffed = true;
    return userAgent;
  });

  window.navigator.__defineGetter__('platform', function() {
    window.navigator.sniffed = true;
    return platform;
  });
}

(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.evaluateOnNewDocument(sniffDetector);
  await page.goto('https://www.google.com', {waitUntil: 'networkidle2'});
  console.log('Sniffed: ' + (await page.evaluate(() => !!navigator.sniffed)));

  await browser.close();
})();
