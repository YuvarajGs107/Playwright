import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';

test('validate the FB Title', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto("https://www.facebook.com/");
    
    await expect(page).toHaveTitle("facebook");

});
