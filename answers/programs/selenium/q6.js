// 6. Form Entry and Submission
// Open https://demoqa.com/text-box. Using both tools, enter a full name, email address, current address and permanent address.
// Click Submit and verify that the submitted information is displayed correctly.
const { Builder } = require("selenium-webdriver");
const formSubmission = async () => {
  const driver = await new Builder().forBrowser("chrome").build();
  await driver.goto("https://demoqa.com/text-box");

  const username = await driver.findElement(By.className("input['fullName']"))
  console.log("username selected")
  const email = 
};
