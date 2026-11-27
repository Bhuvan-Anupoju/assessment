const { chromium } = require("playwright");

async function testBrowser() {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 500,
  });

  const page = await browser.newPage();
  try {
    await page.goto("https://www.saucedemo.com");
    console.log("Website opened");
    await page.waitForTimeout(5000);

    let username = page.locator("#user-name");

    await username.pressSequentially("standard_user", {
      delay: 300,
    });

    console.log("Username entered");

    let password = page.locator("#password");

    await password.pressSequentially("secret_sauce", { delay: 300 });
    console.log("Password entered");

    let loginButton = page.locator("#login-button");

    await page.waitForTimeout(2000);

    await loginButton.click();
    console.log("Login button clicked");
    await page.waitForTimeout(5000);
    let heading = page.locator(".title");
    console.log("Heading:", await heading.innerText());

    await page.waitForTimeout(15000);
  } catch (error) {
    console.log("Error", error);
    await page.waitForTimeout(15000).catch(() => {});
  } finally {
    await browser.close();
    console.log("Browser closed");
  }
}
testBrowser();
