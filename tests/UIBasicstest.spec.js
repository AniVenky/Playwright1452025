const {test, expect} =require('@playwright/test');


test("first playwright test", async ({browser, page}) =>{
    
    //const context =await browser.newContext();
    //const page =await context.newPage();
    await page.goto("https://www.google.com/");

    //await and async come together


});

test("browser context", async({browser})=>{
    const context =await browser.newContext();
    const page =await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
})