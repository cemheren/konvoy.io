'use strict';

const puppeteer = require('puppeteer');

(async() => {

  async function sendToSlack(text, filename){
    // replace the webhook url with your own. Go to https://my.slack.com/services/new/incoming-webhook/ and click add incoming webhooks integration.
    await slack.sendToWebhook(
        "https://hooks.slack.com/services/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", 
        "#random",
        "testUserName",
        text,
        filename); 
  };

  await sendToSlack("Test start.");

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://example.com');
  await page.screenshot({path: 'example.jpeg'});

  await sendToSlack("Test succesfull.", "example.jpeg");

  await browser.close();
})();