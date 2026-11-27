// 2. Browser Launch and Website Navigation
// Write separate automation programs using Selenium and Playwright to:
// a) Launch Chrome in headed mode.
// b) Open https://www.saucedemo.com.
// c) Print the page title and current URL.
// d) Refresh the page, navigate back and navigate forward.
// e) Keep the browser open briefly before closing it.

const { Builder, By } = require("selenium-webdriver");

const launchWebsite = async () => {
  const driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://www.saucedemo.com.");
  const title = await driver.findElement(By.className("login_logo"));
  console.log("Page title: ", await title.title());
  await driver.close();
};
launchWebsite();
