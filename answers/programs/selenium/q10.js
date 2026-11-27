// 10. Browser and Page Information
// Using both Selenium and Playwright, open a practice website and retrieve its page title and current URL.
// Then refresh the page and verify the title and URL again. Keep the browser visible during the demonstration and close it after completing the checks.

const { Builder } = require("selenium-webdriver");
const browserInfo = async () => {
  const browser = await new Builder().forBrowser("chrome").build();
  await browser.get("https://www.youtube.com");
  const title = await browser.getTitle();
  console.log("Page title: ", title);
  console.log("Current URL: ", await browser.getCurrentUrl());
  await browser.navigate().refresh();
  console.log("Page title after refresh: ", await browser.getTitle());
  console.log("Current URL after refresh: ", await browser.getCurrentUrl());
  await browser.quit();
};
browserInfo();
