import { test, expect } from '@playwright/test';

// Test Case 1: Successfull login befor each
test.describe('Successfull login', () => {
  test.beforeEach('login', async ({ page }) => {
  // Navigate to the login page.
  await page.goto('http://localhost:4200') 
  // Fill in the username field with a valid username.
  // Fill in the password field with a valid password.
  const usernameField = await page.locator('input[name="name"]').fill('tester');
  const passwordField = await page.locator('input[name="password"]').fill('tester@123');
  // Submit the form.
  await page.locator('button[type=login]').click();




// Expected Result: The error message "In future we will update the user data" should be displayed.
await page.waitForURL('http://localhost:4200/user-update?username=tester');

// Verify the URL contains the query parameters
await expect(page.url()).toBe('http://localhost:4200/user-update?username=tester');

// Submit the form.
await page.locator('button[type=submit]').click();
  });
  test('should display all selection boxes', async ({ page }) => {
      
    await page.locator('div').filter({ hasText: 'Select a make' }).nth(2);
    await page.getByRole('combobox', { name: 'Select a make' }).locator('span');
    await page.locator('div').filter({ hasText: 'Select color' }).nth(2);
    await page.getByRole('combobox', { name: 'Select color' }).locator('span');
    await page.locator('div').filter({ hasText: 'Select fuel type' }).nth(2);
    await page.getByRole('combobox', { name: 'Select fuel type' }).locator('span');
    await page.locator('div').filter({ hasText: 'Select engine CC' }).nth(2);
    await page.getByRole('combobox', { name: 'Select engine CC' }).locator('span');
    await page.locator('div').filter({ hasText: 'Select mileage' }).nth(2);
    await page.getByRole('combobox', { name: 'Select mileage' }).locator('span');
    
    await page.pause();

  });
test('check selection options in dropdowns', async ({ page }) => {

// Locate the dropdown menu
const dropdown = await page.locator('Carmake01');

// Click to open the dropdown menu
await dropdown.click();
// Get all the options in the dropdown menu
const options = await dropdown.locator('Carmake01').allTextContents();
// Define the expected options
const expectedOptions = ['Renault', 'BMW', 'Skoda'];
});

});

    // TEST 2 - display of all selection boxes
    
