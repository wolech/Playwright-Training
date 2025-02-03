import { test, expect } from '@playwright/test';
import ContactPage from '../Pages/endpage.page';

// Test Case 1: Successfull login befor each
test.describe('Successfull login', () => {
  test.beforeEach('login', async ({ page }) => {
  // Navigate to the login page.
  await page.goto('/login'); 
  // Fill in the username field with a valid username.
  // Fill in the password field with a valid password.
  const usernameField = await nameInput.fill('tester');
  const passwordField = await asswordInput.fill('tester@123');
  // Submit the form.
  await page.locator('button[type=login]').click();




// Expected Result: The error message "In future we will update the user data" should be displayed.
await page.waitForURL('/user-update?username=tester');

// Verify the URL contains the query parameters
await expect(page.url()).toBe('/user-update?username=tester');

// Submit the form.
await page.locator('button[type=submit]').click();
  });
//_______________________________________________________________________________________________________________________
  // Test Case 2: Display of all selection boxes
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
    
    

  });

  //_______________________________________________________________________________________________________________________
  // Test Case 3: Check all available option combinations in dropdowns
test('check selection options in dropdowns', async ({ page }) => {

// Locate the dropdown menu


const dropdown = await page.getByRole('combobox', { name: 'Select a make' }).locator('svg');
await dropdown.click();

// // Click to open the dropdown menu
// await dropdown.click();
// Get all the options in the dropdown menu
const options = await dropdown.locator('Carmake01').allTextContents();
// Define the expected options
const expectedOptions = ['Renault', 'BMW', 'Skodaaa'];
for (const option of expectedOptions) {
  await expect(options).toContain(option);

await page.pause();
}

});



});
    
