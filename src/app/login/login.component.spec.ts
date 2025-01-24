// Test Cases:

import { test, expect } from '@playwright/test';

// Test Case 1: Verify Username and Password Fields are Visible
// Description: Ensure that the username and password input fields are visible on the login page.
test.describe('Login Page', () => {
  test('should display username and password fields', async ({ page }) => {
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
await page.goto('http://localhost:4200/login', { timeout: 30000 });
// Check if the username input field is visible.
// Check if the password input field is visible.
    const usernameField = await page.locator('input[name="name"]');
    const passwordField = await page.locator('input[name="password"]');
// Expected Result: Both the username and password input fields should be visible.
    await expect(usernameField).toBeVisible();
    await expect(passwordField).toBeVisible();
  });
});




// Test Case 2: Verify Error Message for Empty Password field
// Description: Ensure that an error message is displayed when the password field is left empty and the form is submitted.
test.describe('Login Page', () => {

  // Navigate to the login page.
  test('should display error message for empty password', async ({ page }) => {
    await page.goto('http://localhost:4200/login')

    const usernameField = await page.locator('input[name="name"]').fill('invalid-username');

// Leave the password field empty.
// Fill in the username field.
// Submit the form.

// Expected Result: The error message "Password is required." should be displayed.
    await page.locator('button[type=submit]').click();
// Check for the error message "Password is required."
const errorMessage = await page.locator('text=Password is required');
await expect(errorMessage).toBeVisible();
});
} );


// Test Case 3: Verify Error Message for Empty username field
// Description: Ensure that an error message is displayed when the username field is left empty and the form is submitted.
test.describe('Login Page', () => {

  // Navigate to the login page.
  test('should display error message for empty username', async ({ page }) => {
    await page.goto('http://localhost:4200/login')

    const passwordField = await page.locator('input[name="password"]').fill('invalid-password');

// Leave the username field empty.
// Fill in the password field.
// Submit the form.

// Expected Result: The error message "Username is required is required." should be displayed.
    await page.locator('button[type=submit]').click();
// Check for the error message "Username is required is required."
const errorMessage = await page.locator('text=Username is required');
await expect(errorMessage).toBeVisible();
});
} );


// Test Case 4: Verify Error Message for Invalid Credentials
// Description: Ensure that an error message is displayed when invalid credentials are entered.

test('should display error message for invalid credentials', async ({ page }) => {
  await page.goto('http://localhost:4200/login') 
  // Fill in the username field with an invalid username.
// Fill in the password field with an invalid password.
      const usernameField = await page.locator('input[name="name"]').fill('invalid-username');
      const passwordField = await page.locator('input[name="password"]').fill('invalid-password');
  // Submit the form.
      await page.locator('button[type=submit]').click();
      // Check for the error message indicating invalid credentials.
      const errorMessage = await page.locator('text=Invalid Username or Password');
      await expect(errorMessage).toBeVisible();
  // Check for the error message indicating invalid credentials.

});


// Test Case 5: Verify Successful Login
// Description: Ensure that the user can successfully log in with valid credentials.
test('should successfully log in with valid credentials', async ({ page }) => {
// Navigate to the login page.
await page.goto('http://localhost:4200/login') 
// Fill in the username field with a valid username.
// Fill in the password field with a valid password.
  const usernameField = await page.locator('input[name="name"]').fill('tester');
  const passwordField = await page.locator('input[name="password"]').fill('tester@123');
// Submit the form.
await page.locator('button[type=submit] id="button2').click();

  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('Login Successful');
    await dialog.dismiss();
  });
  await page.click('#alert-button');
});
