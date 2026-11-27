// 3. Selenium Locator Strategies
// Open https://demoqa.com/text-box. Locate the Full Name, Email and Current Address fields, and the Submit button using suitable Selenium locator strategies.
// Use at least three different strategies among ID, name, class name, CSS selector and XPath.
const { Builder } = required("selenium-webdriver");
const locatorStrategies = async () => {
  const driver = await new Builder().forBrowser("chrome").build();
  await driver.get("https://demoqa.com/text-box");
  const fullNameField = await driver.findElement(By.id("userName"));
  const emailField = await driver.findElement(By.name("userEmail"));
  const currentAddressField = await driver.findElement(
    By.className("form-control"),
  );
  const submitButton = await driver.findElement(By.cssSelector("#submit"));
  console.log(fullNameField, emailField, currentAddressField, submitButton);
  await driver.close();
};
