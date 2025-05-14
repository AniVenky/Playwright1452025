const {test, request, expect} = require('@playwright/test')
let token;
const email = 'anila@yopmail.com';
const password = 'Anila@001'
const Product = 'ADIDAS ORIGINAL';

test.beforeAll('Api details', async()=>{
  const apiContext =await request.newContext();
  const loginResponse =await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login',{
    data: {
        userEmail: "anila@yopmail.com", userPassword: "Anila@001"
    }
  })
  expect(loginResponse.ok()).toBeTruthy();
  const loginResponseJson= await loginResponse.json();
  token = await loginResponseJson.token;
  console.log(token);


});
test('API testing', async({browser,page}) =>{
    await page.addInitScript(value => {
        window.localStorage.setItem('token',value);
    }, token);
    console.log(token);
;    await page.goto('https://rahulshettyacademy.com/client/');
    await page.waitForLoadState("networkidle");

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
    await page.pause();

});