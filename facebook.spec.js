import { test, expect } from '@playwright/test';

test('validate the FB Title', async ({ page }) => {
    await page.goto("https://www.facebook.com/");
    
    await expect(page).toHaveTitle("Facebook – log in or sign up");
});
