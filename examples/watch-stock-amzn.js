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

await page.goto('https://www.google.com/search?q=amazon+stock&oq=amazon+stock&aqs=chrome.0.0l2j69i60j0j69i60j0.2302j1j7&sourceid=chrome&ie=UTF-8');

const stockMovement = await page.$eval('.fac-cc', el => el.childNodes[0].nodeValue)
console.log(stockMovement);
var percentage = stockMovement.split(" ")[0];
percentage = parseInt(percentage);
if(percentage > 10){
  console.log("stock is rising up");
  // you can send a slack message or log a test result here. 
  sendToSlack('amazon stock rised by: ' + percentage + ' percent', null)
}

await page.screenshot({path: 'screenshot.png'});
await browser.close();
