import { test, expect } from '@playwright/test';
import Register from '../pages/Register and Login';
import Account from '../pages/Account';

test.only('Register', async ({ page }) => {
    const registerPage = new Register(page);
    const accountsPage = new Account(page);

    const randomNumber = Math.floor(Math.random() * 100000);
    const username = `monisha${randomNumber}`;
    const password = 'Test@123';
    
    await page.goto(registerPage.URL);
    await registerPage.registerDetails(username, password);
    console.log(username);
    console.log(password);
    const accountDetails = await accountsPage.openAccount();
    console.log("Account Type:" + accountDetails.accountType);
    console.log("Account Balance:" + accountDetails.balance);
    console.log("Available Balance:" + accountDetails.availableBalance);
});
