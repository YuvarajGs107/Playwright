import { test, expect } from '@playwright/test';

test('validate the Instagram Title', async ({ page }) => {
    await page.goto("https://www.instagram.com/");
    
    await expect(page).toHaveTitle("Instagram");
});
