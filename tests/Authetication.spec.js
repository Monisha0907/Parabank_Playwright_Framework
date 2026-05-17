import { test, expect } from '@playwright/test';
import Register from '../pages/Register';

test.only('Register', async ({ page }) => {
    const registerPage = new Register(page);
    await page.goto(registerPage.URL);
    await registerPage.registerDetails();
    await page.waitForLoadState('networkidle');
    await expect(registerPage.successMessage).toBeVisible();
    await page.pause();
});