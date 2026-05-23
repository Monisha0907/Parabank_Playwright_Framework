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
    await accountsPage.openAccount();
    console.log("Account Type:" +await accountsPage.accountTypeText.textContent());
    console.log("Account Balance:" +await accountsPage.accountBalance.textContent());
    console.log("Available Balance:" +await accountsPage.accountAvailableBalance.textContent());
});
