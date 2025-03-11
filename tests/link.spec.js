import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';

test("locate the element",async()=>{
    const browser =await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://www.linkedin.com/login');
    await page.fill('input#username', 'yuvaraj');
    await page.fill('input#password', '12345'); 
    await page.click('.btn__primary--large.from__button--floating');
})
