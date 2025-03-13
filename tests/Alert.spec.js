import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';

test("Alert Pop Up",async()=>{
    const browser =await chromium.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://demo.automationtesting.in/Alerts.html');
    // await page.on('dialog',(dialog) =>{
    // console.log(`alert message ${dialog.message})`)

    // })
    await page.locator("//a[text()='Alert with OK']").click();
    await page.locator("//button[@onClick=]").click();
    await page.locator("//button[@onClick=]").click();

    await page.waitForTimeout(5000);
    
})
