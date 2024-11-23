import { test, expect, BrowserContext, Page } from '@playwright/test';
import {homePage as homePaths} from "../assets/pagePaths"
import {homePage as homeStrings} from "../assets/strings"


test.describe.configure({ mode: 'serial' });

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  page.setDefaultTimeout(1000)
});

test.afterAll(async () => {
    await page.close();
  });

test.describe("is home page is availble",()=>{
    test("is home page is valid",async()=>{
        await page.goto('https://demo.vercel.store/',{referer:"test",waitUntil:"domcontentloaded"});
        const pageTitle = await page.title()
        const navbar = await page.locator(homePaths.navBar).innerHTML()
        const logoLink = await page.locator(homePaths.logoLink)

        expect(pageTitle).toBe(homeStrings.title);
        expect(navbar).toBeTruthy();
        expect(logoLink).toBeTruthy();
    })
})