// 6. Form Entry and Submission
// Open https://demoqa.com/text-box. Using both tools, enter a full name, email address, current address and permanent address.
// Click Submit and verify that the submitted information is displayed correctly.

const { chromium } = require("playwright");
const formSubmission = async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://demoqa.com/text-box");
  const fullName = await page.locator("#fullname");
  console.log("username selected");
  const email = await page.locator("#email");
  console.log("password selected");
  const currentAddress = await page.locator("#current-address");
  console.log("current address selected");
  const permenantAddress = await page.locator("#permentnt-address");
  console.log("permenant address selected");
  await fullName.pressSequentially("Bhuvan Anupoju", { delay: 3000 });
  console.log("username entered");
  await email.pressSequentially("bhuvan@fake.com", { delay: 3000 });
  console.log("email entered");
  await currentAddress.pressSequentially("123 Fake St, Faketown, FA 12345", {
    delay: 3000,
  });
  console.log("current address entered");
  await permenantAddress.pressSequentially("456 Fake St, Faketown, FA 67890", {
    delay: 3000,
  });
  await page.quit();
};
formSubmission();
