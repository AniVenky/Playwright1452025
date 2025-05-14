const {test, expect} =require('@playwright/test');
const email = 'anila@yopmail.com';
const password = 'Anila@001'
const Product = 'ADIDAS ORIGINAL';
test('Register user', async({browser,page})=>{
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator('.text-reset').click();
    await page.locator('#firstName').fill('anila');
    await page.locator('#lastName').fill('vithanala');
    await page.locator('#userEmail').fill(email);
    await page.locator('#userMobile').fill('8880388803');
    await page.locator('.custom-select').selectOption('Student');
    await page.getByLabel('Female').check();
    await page.locator('#userPassword').fill(password);
    await page.locator('#confirmPassword').fill(password);
    await page.locator('input[type="checkbox"]').check();
    await page.locator('#login').click();
    await 
    await page.pause();
});

test('Login ', async({browser})=>{
    const context = await browser.newContext({storageState: 'state.json'});
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/client');
    /*await page.locator('#userEmail').fill(email);
    await page.locator('#userPassword').fill(password);
    await page.locator('#login').click();
    await page.waitForLoadState("networkidle");
    await context.storageState({path: 'state.json'});
    */
    await Promise.all([
        await page.locator('.card-body').filter({hasText:Product}).locator('.fa-shopping-cart').click(),
        page.waitForResponse(async response => {
          return response.url().includes('add-to-cart') &&
                 response.status() === 200 &&
                 (await response.json()).message === 'Product Added To Cart';
        }),
      ]);
    await page.locator('.btn.btn-custom[routerlink="/dashboard/cart"]').click();
    console.log(await page.locator('.cartWrap').allTextContents());

    expect(await page.locator('.cartWrap', { hasText: Product })).toBeVisible();
     await page.locator('button', {hasText: 'Checkout'}).click();
     //await page.locator('button', { hasText: 'Checkout' }).click();
 
    await page.pause();

});

