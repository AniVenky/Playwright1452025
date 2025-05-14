const {test, expect} = require('@playwright/test')

test("loginform",async ({browser,page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('#username').fill("rahulshettyacademy");
    await page.locator('input[type="password"]').fill("learning");
    await page.locator('input[type="submit"]').click();
    //console.log(await page.locator('[style="display: block;"]').textContent());
    //await expect(page.locator('[style="display: block;"]')).toContainText('Incorrecg');
    await page.locator('.card').filter({hasText: 'iphone X'}).locator('.btn').click();
    //await page.pause(); 

})
test('Switching to new tab', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('.blinkingText').click();
    const newpage = await context.waitForEvent('page');
    await newpage.waitForLoadState('networkidle');
    const redText = await newpage.locator('.red').textContent();
    console.log(redText);
    const sliceText = await redText.split('@')[1];
    const text = sliceText.split(' ')[0];
    console.log(text);
    await newpage.pause();

});