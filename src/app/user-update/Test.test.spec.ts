import { test, expect } from '@playwright/test';



// Test Case 1: Verify Customer Update Form Fields are Visible
// Description: Ensure that all input fields in the customer update form are visible.
test('should successfully log in with valid credentials', async ({ page }) => {
  // Navigate to the login page.
  await page.goto('http://localhost:4200/login') 
  // Fill in the username field with a valid username.
  // Fill in the password field with a valid password.
    const usernameField = await page.locator('input[name="name"]').fill('tester');
    const passwordField = await page.locator('input[name="password"]').fill('tester@123');
  // Submit the form.
  await page.getByRole('button', { name: 'Update' }).click();

  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('Login Successful');
    await dialog.dismiss();
  });
  // await page.click('#alert-button');
  // Page redirected to http://localhost:4200/user-update
// await expect(page.url()).toBe('http://localhost:4200/user-update?username=tester');


// Check if the username input field is visible.
// Check if the  password input field is visible.
// Check if the  firstname number input field is visible.
// Check if the  lastname input field is visible.
// Check if the  email input field is visible.
// Check if the phone number input field is visible.
// Check if the  date of birth number input field is visible.
await page.getByRole('textbox', { name: 'Welcome' })
await page.getByRole('textbox', { name: 'Password' })
await page.getByRole('textbox', { name: 'First Name' });
await page.getByRole('textbox', { name: 'Last Name' });
await page.getByRole('textbox', { name: 'Email' });
await page.getByRole('textbox', { name: 'Mobile Number' });
await page.getByRole('textbox', { name: 'Date Of Birth' });
// Expected Result: All input fields should be visible.


await page.pause();
  await page.getByRole('button', { name: 'Update' }).click();
  // Check for the error message "Username is required."
  const errorMessage = await page.locator('text=In future we will update the user data.');
  await expect(errorMessage).toBeVisible();
  });

function getByRole(arg0: string, arg1: { name: string; }) {
    throw new Error('Function not implemented.');
}
  // Close the browser context
