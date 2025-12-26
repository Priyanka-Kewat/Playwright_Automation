const { test, expect } = require("@playwright/test");

test("First Running Case", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  // await page.goto("https://www.google.com");
  console.log(await page.title());

  // await expect(page).toHaveTitle("Google");

  await page.locator("input#username").fill("Priyanka kewat");
  await page.locator("[type=password]").fill("learning");
  await page.locator("[type=checkbox]").click();
  await page.locator("[type=submit]").click();
  //  Wait untill then error message shown up
  console.log(await page.locator("[style*=block]").textContent());
  await expect(page.locator("[style*=block]")).toContainText("Incorrect");
  await page.locator("input#username").fill("");

  await page.locator("input#username").fill("rahulshettyacademy");
  await page.locator("[type=submit]").click();

  // console.log(await page.locator(".card-title a").first().textContent());
  // console.log(await page.locator(".card-title a").nth(2).textContent());

  await page.waitForSelector(".card-title a");

  console.log(await page.locator(".card-title a").allTextContents());

  await page.pause();
});

test("Dropdown selection case", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  // await page.goto("https://www.google.com");
  console.log(await page.title());

  await page.locator("input#username").fill("rahulshettyacademy");
  await page.locator("[type=password]").fill("learning");
  await page.locator("select.form-control").selectOption("consult");
  await page.locator(".radiotextsty").last().click();
  await page.locator("#okayBtn").click();
  // await page.waitForTimeout(500);
  console.log(await page.locator(".radiotextsty").last().isChecked());

  await expect(page.locator("[href*='documents-request']")).toHaveAttribute(
    "class",
    "blinkingText"
  );

  // expect(page.locator("radiotextsty").last()).toBeChecked();

  // await page.locator("[type=checkbox]").click();
  // await page.locator("[type=submit]").click();

  await page.pause();
});

test.only("open link in new tab", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  // const [newPage] = await Promise.all([
  //   context.waitForEvent("page"),

  //   page.locator("[href*='documents-request']").click(),
  // ]);
  // const text = await newPage.locator(".red").textContent();
  // console.log(text);
  // const arrayText = text.split("@");
  // const domain = arrayText[1].split(" ")[0];
  // console.log(domain);
  // await page.locator("input#username").fill(domain);
  // console.log(await page.locator("input#username").inputValue());

  // await page.pause();
});
