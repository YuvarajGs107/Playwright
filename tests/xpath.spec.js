import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';

test("locate the element",async()=>{
    const browser =await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
})
