// 10. Browser and Page Information
// Using both Selenium and Playwright,
// open a practice website and retrieve its page title and current URL.
//  Then refresh the page and verify the title and URL again.
//  Keep the browser visible during the demonstration and close it after completing the checks.
const { chromium } = require("playwright");
const browserInfo = async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://www.youtube.com");
  const title = await page.locator("login_logo");
  console.log("Page title: ", await title.textContent());
  console.log("Current URL: ", page.url());
  await page.reload();
  await page.quit();
};
