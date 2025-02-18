import { test, expect } from '@playwright/test';


// Test Case 1: Successfull login befor each
test.describe('Successfull login', () => {
    test.beforeEach('login', async ({ page }) => {
      
        await page.goto('http://localhost:4200/login');
        // Fill in the username field with a valid username.
        // Fill in the password field with a valid password.
        const usernameField = await page
            .locator('input[name="name"]')
            .fill('tester');
        const passwordField = await page
            .locator('input[name="password"]')
            .fill('tester@123');
        // Submit the form.
        await page.locator('button[type=login]').click();
    
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toContain('Login Successful');
            await dialog.dismiss();
    });
});
});

    //_______________________________________________________________________________________________________________________
    // Test Case 2: Check all available option combinations in dropdowns or any other test you want;