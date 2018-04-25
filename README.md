# [konvoy.io](https://konvoy.io)

[![Join the chat at https://gitter.im/konvoy-io/Lobby](https://badges.gitter.im/konvoy-io/Lobby.svg)](https://gitter.im/konvoy-io/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
Konvoy is a tool for running Puppeteer scripts in the cloud without the hassle of dealing with a cloud provider. With Konvoy you can deploy and schedule most Node.js/Puppeteer scripts with literally 3 clicks on your browser. 

# Example use cases
Test scenario automation: 
Adding a script to test your login flow never been so easy. Follow the twitter example here: https://github.com/cemheren/konvoy.io/blob/master/examples/test-login-flow-twitter.js which logs into twitter and checks whether the profile element is there. You can easily send messages to Slack, log your test results using simple if statements. And to schedule just hit 'Save' and set the timing interval. 

Scrape information from web: 
Ever needed to check a website and report something on a daily basis? We are here to help. Checkout https://github.com/cemheren/konvoy.io/blob/master/examples/watch-stock-amzn.js, which simply googles Amazon.com stock info and scrapes the rise in the stock price, alerts you if there is more than 10 percent change. With Konvoy + Puppeteer you don't need third party libraries to extract the information you want out of the interwebs. 

# How easy is it? 
Load playground (https://konvoy.io/playground) and select an example on the navbar list:
![alt text](https://github.com/cemheren/konvoy.io/blob/master/images/konvoy.io_playground.png)
Make sure you are logged in and save it! (1440 mins = 1 day)
![alt text](https://github.com/cemheren/konvoy.io/blob/master/images/konvoy.io_playground_amzn.png)

# Issues
Please file any issue you find on this repo so we can fix it as soon as possible. 
