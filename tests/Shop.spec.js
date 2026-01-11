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

  await page.locator("text=Checkout").click();
  await page
    .locator("[placeholder*='Country']")
    .pressSequentially("ind", { delay: 150 });

  const dropdown = await page.locator(".ta-results");
  await dropdown.waitFor();
  const optCounts = await dropdown.locator("button").count();
  console.log(optCounts);

  for (let i = 0; i < optCounts; ++i) {
    const text = await dropdown.locator("button").nth(i).textContent();
    // await text.waitFor();

    if (text === " India") {
      await dropdown.locator("button").nth(i).click();
      break;
    }
  }

  expect(page.locator(".user__name [type='text']").first()).toHaveText(
    "priyankakewat43@gmail.com"
  );

  await page.locator(".action__submit").click();
  await expect(page.locator(".hero-primary").first()).toHaveText(
    " Thankyou for the order. "
  );
  const order_id = await page
    .locator(".em-spacer-1 .ng-star-inserted")
    .textContent();
  console.log(order_id);

  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr");

  for (let i = 0; i < (await rows.count()); ++i) {
    const rowOrderId = await rows.nth(i).locator("th").textContent();
    if (order_id.includes(rowOrderId)) {
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }
  const orderIdDetails = await page.locator(".col-text").textContent();
  expect(order_id.includes(orderIdDetails)).toBeTruthy();

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
