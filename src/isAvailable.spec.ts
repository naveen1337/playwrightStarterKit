import { test, expect, } from '@playwright/test';

test.skip("is home page is availble",()=>{
    test("is home page has title",async({page})=>{
        await page.goto('https://demo.vercel.store/');
        await expect(page).toHaveTitle("Acme Store");
    })
})