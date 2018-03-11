 const browser = await puppeteer.launch();
 const page = await browser.newPage();
 await page.goto('https://konvoy.io');

  var element  = await page.$('.home-page-banner')
  if(element){
    console.log("found")
    await context.sendTestResult(true, ".home-page-banner found");
  }else{
    console.log("notfound")
    await context.sendTestResult(false, ".home-page-banner not found");
  }

  await browser.close();
