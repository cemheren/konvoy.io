'use strict';

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.emulate(devices['iPhone 6']);
  await page.goto('https://www.nytimes.com/');
  await page.screenshot({path: 'full.png', fullPage: true});
  await browser.close();
})();
