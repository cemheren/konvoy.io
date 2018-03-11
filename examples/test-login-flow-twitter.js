const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://twitter.com/login');

await page.waitFor(1000);

await page.type('.js-username-field', 'konvoypublic1');
await page.type('.js-password-field', 'knvytest');

await page.click('.clearfix .submit');

await page.waitFor(2000);

var element  = await page.$('.DashboardProfileCard-content')
if(element){
  console.log("element found")
  await context.sendTestResult(true, ".DashboardProfileCard-content found");
}else{
  console.log("element notfound")
  await context.sendTestResult(false, ".DashboardProfileCard-content not found");
}

await page.screenshot({path: 'screenshot.png', fullPage:true});
await browser.close();
