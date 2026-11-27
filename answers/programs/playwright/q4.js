// 4. Playwright Locator Strategies
// Open https://demoqa.com/text-box. Locate the Full Name, Email and Current Address fields, and the Submit button using Playwright.
// Use suitable methods such as locator(), getByRole(), getByText() and getByPlaceholder() where appropriate.

const { chromium } = require("playwright");

const locatorStrategies = async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://demoqa.com/text-box");
  const fullName = page.locator().getByText("Full Name");
  const email = page.locator().getByPlaceholder("email");
  const currentAddress = page.locator().getByRole("textbox", {
    name: "Current Address",
  });
  const submitButton = page.locator().getByRole("button", { name: "Submit" });
  console.log(fullName, email, currentAddress, submitButton);
  await page.close();
};
