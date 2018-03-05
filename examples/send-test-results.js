'use strict';

const puppeteer = require('puppeteer');

(async() => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://example.com');
  await page.screenshot({path: 'example.jpeg'});

  // Konvoy only supports one test result per test execution. Logs can be up to 64kb.
  // context.sendTestResult(<hasPassed>, <logs>);
  await context.sendTestResult(true, "Test has successfully passed.");
  
  await browser.close();
})();