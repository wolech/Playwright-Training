import { test, expect } from '@playwright/test';
import { ContactPage } from '../Pages/endpage.page';
import { LoginPage } from '../Pages/login.page';

// Test Case 1: Successfull login befor each
test.describe('Successfull login', () => {
  test.beforeEach('login', async ({ page }) => {
    // Navigate to the login page.
    const contactPage = new ContactPage(page);
    await page.goto('/login');
    // Fill in the username field with a valid username.
    // Fill in the password field with a valid password.
    const usernameField = await LoginPage.nameInput.fill('tester');
    const passwordField = await LoginPage.passwordInput.fill('tester@123');
    // Submit the form.
    await page.locator('button[type=login]').click();

    // Expected Result: The error message "In future we will update the user data" should be displayed.
    await page.waitForURL('/user-update?username=tester');

    // Submit the form.
    await page.locator('button[type=submit]').click();
  });

  //_______________________________________________________________________________________________________________________
  // Test Case 2: Check all available option combinations in dropdowns
  test('check selection options in dropdowns', async ({ page }) => {
    // Locate the dropdown menu

    const dropdown =  page
      .getByRole('combobox', { name: 'Select a make' })
      .locator('svg');
    await dropdown.click();

    // // Click to open the dropdown menu
    // await dropdown.click();
    // Get all the options in the dropdown menu
    const actualOptions = await dropdown.locator('Carmake01').allTextContents();
    // Define the expected options
    const expectedOptions = ['Renault', 'BMW', 'Skodaaa'];
    // for (const option of expectedOptions) {
      // expect(actualOptions).toContain(expectedOptions);
await expect(page.getByRole('option', { name: 'BMW' })).toBeVisible();
// await page.locator('#mat-select-value-0').click();
// await page.getByRole('option', { name: 'Skoda' }).click();
// await page.locator('#mat-select-value-0').click();
// await page.getByRole('option', { name: 'Renault' }).click();
      // await page.pause();
    // }
  });
});
