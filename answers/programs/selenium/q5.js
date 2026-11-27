// 5. SauceDemo Login Automation
// Using both Selenium and Playwright, automate the login page at https://www.saucedemo.com.
// Username: standard_user
// Password: secret_sauce
// Enter the credentials, click Login, verify that the Products page is displayed, and print the verification result.

const { Builder, By } = require("selenium-webdriver");
const saucedemo = async () => {
  const driver = await new Builder().forBrowser("chrome").build();
  await driver.goto("https://www.saucedemo.com");
  console.log("website opened");
  const username = await driver.findElement(By.className("username"));

  const password = await driver.findElement(By.className("password"));
  console.log("password");
  const loginButton = await driver.findElement(By.className("loginButton"));
  await username.sendKeys("standard_user");
  console.log("username entered");
  await password.sendKeys("secret_sauce");
  console.log("password entered");
  await loginButton.click();
  await driver.close();
};
