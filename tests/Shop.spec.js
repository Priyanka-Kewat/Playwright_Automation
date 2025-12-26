const { test, expect } = require("@playwright/test");

test("Automate shop website", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  const products = page.locator(".card-body");
  const productName = "iphone 13 pro";
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

  console.log(await page.title());

  await page.locator("input#userEmail").fill("priyankakewat43@gmail.com");
  await page.locator("[type=password]").fill("!!Enliv12345");
  await page.locator("input#login").click();

  await page.waitForSelector(".card-body b");
  await page.locator(".card-body b").first().waitFor();
  console.log(await page.locator(".card-body b").allTextContents());

  const counts = await products.count();
  console.log(counts);

  for (let i = 0; i <= counts; ++i) {
    if ((await products.nth(i).locator("b").textContent()) === productName) {
      await products.nth(i).locator("text= Add To Cart").click();
      break;
    }
  }
  await page.locator("[routerlink*='cart']").click();
  await page.locator("div li").first().waitFor();
  const bools = await page.locator("h3:has-text('iphone 13 pro')").isVisible;
  expect(bools).toBeTruthy();

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
