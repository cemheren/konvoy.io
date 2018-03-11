'use strict';

const puppeteer = require('puppeteer');

(async() => {

  async function resizePage(browser, page, height, width){
    await page.setViewport({height, width});
    // Window frame - probably OS and WM dependent.
    height += 85;
    // Any tab.
    const {targetInfos: [{targetId}]} = await browser._connection.send('Target.getTargets');
    // Tab window. 
    const {windowId} = await browser._connection.send('Browser.getWindowForTarget', {targetId});
    // Resize.
    await browser._connection.send('Browser.setWindowBounds', { bounds: {height, width}, windowId});
  };

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await resizePage(browser, page, 1000, 1600);
  await page.goto('https://github.com/cemheren/konvoy.io/tree/master/examples');
  await page.screenshot({path: 'example.jpeg'});

  await browser.close();
})();
