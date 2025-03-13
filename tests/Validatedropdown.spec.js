import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';

test("Validate the dropdown",async()=>{
    const browser =await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://www.hyrtutorials.com/p/html-dropdown-elements-practice.html');
    // await page.selectOption("select#course",{index:2});
    await page.selectOption('select#course', { label: 'Python' });
    // await page.waitForTimeout(3000);
    await page.waitForTimeout(5000);
    
})

