const { test, expect } = require("@playwright/test");

test("Automate shop website", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

  console.log(await page.title());

  await page.locator("input#userEmail").fill("priyankakewat43@gmail.com");
  await page.locator("[type=password]").fill("!!Enliv@1234");
  await page.locator("input#login").click();

  await page.waitForSelector(".card-body b");

  console.log(await page.locator(".card-body b").allTextContents());

  //   await page.locator(".text-reset").click();
  //   await page.locator("input#firstName").fill("Priyanka");
  //   await page.locator("[type=lastName]").fill("Kewat");
  //   await page.locator("[type=email]").fill("priyankakewat43@gmail.com");
  //   await page.locator("input#userMobile").fill("7879484285");

  //   await page.locator("input#userPassword").fill("!!Enliv@1234");
  //   await page.locator("input#confirmPassword").fill("!!Enliv@1234");
  //   await page.locator("[type=checkbox]").click();
  //   await page.locator("[type=submit]").click();

  await page.pause();
});
