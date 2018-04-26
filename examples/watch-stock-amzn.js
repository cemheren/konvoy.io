const browser = await puppeteer.launch();
const page = await browser.newPage();

async function sendToSlack(text, filename){
    // replace the webhook url with your own. Go to https://my.slack.com/services/new/incoming-webhook/ and click add incoming webhooks integration.
    await slack.sendToWebhook(
        "https://hooks.slack.com/services/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", 
        "#random",
        "testUserName",
        text,
        filename); 
  };

await page.goto('https://www.marketwatch.com/investing/stock/amzn');

const stockprice = await page.$eval('bg-quote.value', el => el.childNodes[0].nodeValue)
console.log(stockprice);

// you can send a slack message or log a test result here. 
sendToSlack('current amzn stock price: ' + stockprice, null)

await page.screenshot({path: 'screenshot.png'});
await browser.close();
