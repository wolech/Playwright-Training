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
  await page.locator('button[type=submit]').click();

  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('Login Successful');
    await dialog.dismiss();
  });
  //await page.click('#alert-button');
  // Page redirected to http://localhost:4200/customer-update
await expect(page.url()).toBe('http://localhost:4200/customer-update?username=tester');


// Check if the username input field is visible.
// Check if the  password input field is visible.
// Check if the  firstname number input field is visible.
// Check if the  lastname input field is visible.
// Check if the  email input field is visible.
// Check if the phone number input field is visible.
// Check if the  date of birth number input field is visible.
await page.locator('input[name="username"]');
await page.locator('input[name="password"]');
await page.locator('input[name="firstName"]');
await page.locator('input[name="lastName"]');
await page.locator('input[name="email"]');
await page.locator('input[name="phone"]');
await page.locator('input[name="dateofBirth"]');
// Expected Result: All input fields should be visible.
  });

  // Close the browser context


//___________________________________________________________________________________________________________________________

// Test Case 2: Verify Error Message for Empty password
// Description: Ensure that an error message is displayed when the password field is left empty and the form is submitted.

test.describe('Missing data1', () => {
  test('login', async ({ page }) => {
    // Navigate to the login page.
    await page.goto('http://localhost:4200/login') 
    // Fill in the username field with a valid username.
    // Fill in the password field with a valid password.
    const usernameField = await page.locator('input[name="name"]').fill('tester');
    const passwordField = await page.locator('input[name="password"]').fill('tester@123');
    // Submit the form.
    await page.locator('button[type=submit]').click();

    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Login Successful');
      await dialog.dismiss();
    });

    //empty password
      await page.locator('input[name="password"]')
      await page.locator('input[name="firstName"]').fill('Name');
      await page.locator('input[name="lastName"]').fill('Lastname');
      await page.locator('input[name="email"]').fill('something@a.a');
      await page.locator('input[name="phone"]').fill('1234567891');
      await page.locator('input[name="dateofBirth"]').fill('1980-02-12');

// Submit the form.

// Expected Result: The error message "Username is required is required." should be displayed.
    await page.locator('button[type=submit]').click();
// Check for the error message "Username is required is required."
const errorMessage = await page.locator('text=Password is required.');
await expect(errorMessage).toBeVisible();
});
} );


//___________________________________________________________________________________________________________________________

// Test Case 3: Verify Error Message for Invalid firstname
// Description: Ensure that an error message is displayed when an invalid first name is entered in the first name field.
test.describe('Missing data2', () => {
  test('login', async ({ page }) => {
    // Navigate to the login page.
    await page.goto('http://localhost:4200/login') 
    // Fill in the username field with a valid username.
    // Fill in the password field with a valid password.
    const usernameField = await page.locator('input[name="name"]').fill('tester');
    const passwordField = await page.locator('input[name="password"]').fill('tester@123');
    // Submit the form.
    await page.locator('button[type=submit]').click();

    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Login Successful');
      await dialog.dismiss();
    });

    //empty first name
      await page.locator('input[name="password"]').fill('password');
      await page.locator('input[name="firstName"]')
      await page.locator('input[name="lastName"]').fill('Lastname');
      await page.locator('input[name="email"]').fill('something@a.a');
      await page.locator('input[name="phone"]').fill('1234567891');
      await page.locator('input[name="dateofBirth"]').fill('1980-02-12');



// Submit the form.

// Expected Result: The error message "UFirst Name is required is required." should be displayed.
    await page.locator('button[type=submit]').click();
// Check for the error message "First Name is required is required."
const errorMessage = await page.locator('text=First Name is required.');
await expect(errorMessage).toBeVisible();
});
} );
//___________________________________________________________________________________________________________________________

// Test Case 4: missing last name
// Description: Ensure that the customer details are successfully updated when valid data is entered.
test.describe('Missing data3', () => {
  test('login', async ({ page }) => {
    // Navigate to the login page.
    await page.goto('http://localhost:4200/login') 
    // Fill in the username field with a valid username.
    // Fill in the password field with a valid password.
    const usernameField = await page.locator('input[name="name"]').fill('tester');
    const passwordField = await page.locator('input[name="password"]').fill('tester@123');
    // Submit the form.
    await page.locator('button[type=submit]').click();

    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Login Successful');
      await dialog.dismiss();
    });

    //empty password
      await page.locator('input[name="password"]').fill('password');
      await page.locator('input[name="firstName"]').fill('Name');
      await page.locator('input[name="lastName"]')
      await page.locator('input[name="email"]').fill('something@a.a');
      await page.locator('input[name="phone"]').fill('1234567891');
      await page.locator('input[name="dateofBirth"]').fill('1980-02-12');



// Submit the form.

// Expected Result: The error message "Last Name is required is required." should be displayed.
    await page.locator('button[type=submit]').click();
// Check for the error message "Last Name is required is required."
const errorMessage = await page.locator('text=Last Name is required.');
await expect(errorMessage).toBeVisible();
});
} );


//___________________________________________________________________________________________________________________________

// Test Case 5: mail required
// Description: Ensure that error messages are displayed when required fields are left empty and the form is submitted.
test.describe('Missing data4', () => {
  test('login', async ({ page }) => {
    // Navigate to the login page.
    await page.goto('http://localhost:4200/login') 
    // Fill in the username field with a valid username.
    // Fill in the password field with a valid password.
    const usernameField = await page.locator('input[name="name"]').fill('tester');
    const passwordField = await page.locator('input[name="password"]').fill('tester@123');
    // Submit the form.
    await page.locator('button[type=submit]').click();

    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Login Successful');
      await dialog.dismiss();
    });

   //empty email
   await page.locator('input[name="password"]').fill('password');
   await page.locator('input[name="firstName"]').fill('Name');
   await page.locator('input[name="lastName"]').fill('Lastname');
   await page.locator('input[name="email"]')
   await page.locator('input[name="phone"]').fill('1234567891');
   await page.locator('input[name="dateofBirth"]').fill('1980-02-12');



// Submit the form.

// Expected Result: The error message "Email is required is required." should be displayed.
    await page.locator('button[type=submit]').click();
// Check for the error message "Email is required is required."
const errorMessage = await page.locator('text=Email is required.');
await expect(errorMessage).toBeVisible();
});
} );

//___________________________________________________________________________________________________________________________

// Test Case 6: phone required

test.describe('Missing data5', () => {
  test('login', async ({ page }) => {
    // Navigate to the login page.
    await page.goto('http://localhost:4200/login') 
    // Fill in the username field with a valid username.
    // Fill in the password field with a valid password.
    const usernameField = await page.locator('input[name="name"]').fill('tester');
    const passwordField = await page.locator('input[name="password"]').fill('tester@123');
    // Submit the form.
    await page.locator('button[type=submit]').click();

    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Login Successful');
      await dialog.dismiss();
    });

   //empty password
   await page.locator('input[name="password"]').fill('password');
   await page.locator('input[name="firstName"]').fill('Name');
   await page.locator('input[name="lastName"]').fill('Lastname');
   await page.locator('input[name="email"]').fill('something@a.a');
   await page.locator('input[name="phone"]')
   await page.locator('input[name="dateofBirth"]').fill('1980-02-12');



// Submit the form.

// Expected Result: The error message "Phone number  is required." should be displayed.
    await page.locator('button[type=submit]').click();
// Check for the error message "Phone Number is required."
const errorMessage = await page.locator('text=Phone Number is required.');
await expect(errorMessage).toBeVisible();
});
} );

//___________________________________________________________________________________________________________________________

// Test Case 7: date of birth required
test.describe('Missing data6', () => {
  test('login', async ({ page }) => {
    // Navigate to the login page.
    await page.goto('http://localhost:4200/login') 
    // Fill in the username field with a valid username.
    // Fill in the password field with a valid password.
    const usernameField = await page.locator('input[name="name"]').fill('tester');
    const passwordField = await page.locator('input[name="password"]').fill('tester@123');
    // Submit the form.
    await page.locator('button[type=submit]').click();

    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Login Successful');
      await dialog.dismiss();
    });

   //empty data
   await page.locator('input[name="password"]').fill('password');
   await page.locator('input[name="firstName"]').fill('Name');
   await page.locator('input[name="lastName"]').fill('Lastname');
   await page.locator('input[name="email"]').fill('something@a.a');
   await page.locator('input[name="phone"]').fill('1234567891');
await page.locator('input[name="dateofBirth"]');

// Submit the form.

// Expected Result: The error message "Date of Birth is required." should be displayed.
    await page.locator('button[type=submit]').click();
// Check for the error message "Date of Birth is required."
const errorMessage = await page.locator('text=Date of Birth is required.');
await expect(errorMessage).toBeVisible();
  });
});

// Test Case 7: Successfull login
test.describe('Missing data10', () => {
  test('login', async ({ page }) => {
    // Navigate to the login page.
    await page.goto('http://localhost:4200/login') 
    // Fill in the username field with a valid username.
    // Fill in the password field with a valid password.
    const usernameField = await page.locator('input[name="name"]').fill('tester');
    const passwordField = await page.locator('input[name="password"]').fill('tester@123');
    // Submit the form.
    await page.locator('button[type=submit]').click();

    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('Login Successful');
      await dialog.dismiss();
    });

   //empty password
   await page.locator('input[name="password"]').fill('password');
   await page.locator('input[name="firstName"]').fill('Name');
   await page.locator('input[name="lastName"]').fill('Lastname');
   await page.locator('input[name="email"]').fill('something@a.a');
   await page.locator('input[name="phone"]').fill('1234567891');
   await page.locator('input[name="dateofBirth"]').fill('1980-02-12');



// Submit the form.

// Expected Result: The error message "In future we will update the user data" should be displayed.
    await page.locator('button[type=submit]').click();

    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('In future we will update the user data');
     
    });
  });
});
