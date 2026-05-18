import { test, expect } from '@playwright/test';
import Register from '../pages/Register and Login';

test.only('Register', async ({ page }) => {
    const registerPage = new Register(page);

    const randomNumber = Math.floor(Math.random() * 100000);

    const username = `monisha${randomNumber}`;

    const password = 'Test@123';
    
    await page.goto(registerPage.URL);
    await registerPage.registerDetails(username, password);
    console.log(username);
    console.log(password);

});