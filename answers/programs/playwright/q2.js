// 2. Browser Launch and Website Navigation
// Write separate automation programs using Selenium and Playwright to:
// a) Launch Chrome in headed mode.
// b) Open https://www.saucedemo.com.
// c) Print the page title and current URL.
// d) Refresh the page, navigate back and navigate forward.
// e) Keep the browser open briefly before closing it.

const { chromium } = require("playwright");
const launchWebsite = async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://www.saucedemo.com");
  const title = await page.locator("login_logo");
  console.log("Page title: ", await title.textContent());
  console.log("Current URL: ", page.url());
  await page.reload();
  await page.goBack();
  await page.goForward();
  await page.waitForTimeout(3000);
  await page.close();
};
launchWebsite();
