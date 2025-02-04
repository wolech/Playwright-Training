import { test, expect } from '@playwright/test';

// Test Case 1: Verify Customer Update Form Fields are Visible
// Description: Ensure that all input fields in the customer update form are visible.
test('should successfully log in with valid credentials', async ({ page }) => {
    // Navigate to the login page.
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
    // await page.click('#alert-button');
    // Page redirected to http://localhost:4200/user-update
    await page.goto('http://localhost:4200/user-update?username=tester');

    // Check if the username input field is visible.
    // Check if the  password input field is visible.
    // Check if the  firstname number input field is visible.
    // Check if the  lastname input field is visible.
    // Check if the  email input field is visible.
    // Check if the phone number input field is visible.
    // Check if the  date of birth number input field is visible.
    await page.getByRole('textbox', { name: 'Welcome' });
    await page.getByRole('textbox', { name: 'Password' });
    await page.getByRole('textbox', { name: 'First Name' });
    await page.getByRole('textbox', { name: 'Last Name' });
    await page.getByRole('textbox', { name: 'Email' });
    await page.getByRole('textbox', { name: 'Mobile Number' });
    await page.getByRole('textbox', { name: 'Date Of Birth' });
    // Expected Result: All input fields should be visible.
});

// Close the browser context

//___________________________________________________________________________________________________________________________

// Test Case 2: Verify Error Message for Empty password
// Description: Ensure that an error message is displayed when the password field is left empty and the form is submitted.

test.describe('Missing data1', () => {
    test('login', async ({ page }) => {
        // Navigate to the login page.
        page.on('dialog', async (dialog) => {
            expect(dialog.message()).toContain('Login Successful');
            await dialog.dismiss();
        });

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

        // page.on('dialog', async dialog => {
        //   expect(dialog.message()).toContain('Login Successful');
        //   await dialog.dismiss();
        // });

        //empty password
        await page.getByRole('textbox', { name: 'Password' }).fill('');
        await page.getByRole('textbox', { name: 'First Name' }).fill('Testino');
        await page.getByRole('textbox', { name: 'Last Name' }).fill('Lastname');
        await page
            .getByRole('textbox', { name: 'Email' })
            .fill('something@a.a');
        await page
            .getByRole('textbox', { name: 'Mobile Number' })
            .fill('1234567891');
        await page
            .getByRole('textbox', { name: 'Date Of Birth' })
            .fill('1982-03-12');

        // Submit the form.

        // Expected Result: The error message "Username is required is required." should be displayed.
        await page.getByRole('button', { name: 'Update' }).click();
        // Check for the error message "Username is required is required."
        const passworderrorMessage = await page.locator(
            'text=Password is required.',
        );
        await expect(passworderrorMessage).toBeVisible({ timeout: 5000 });
    });
});

//___________________________________________________________________________________________________________________________

// Test Case 3: Verify Error Message for Empty firstname
// Description: Ensure that an error message is displayed when an invalid first name is entered in the first name field.
test.describe('Missing data2', () => {
    test('login', async ({ page }) => {
        // Navigate to the login page.
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

        //empty first name
        await page.getByRole('textbox', { name: 'Password' }).fill('password');
        await page.getByRole('textbox', { name: 'Last Name' }).fill('Lastname');
        await page
            .getByRole('textbox', { name: 'Email' })
            .fill('something@a.a');
        await page
            .getByRole('textbox', { name: 'Mobile Number' })
            .fill('1234567891');
        await page
            .getByRole('textbox', { name: 'Date Of Birth' })
            .fill('1982-03-12');
        await page.getByRole('textbox', { name: 'First Name' }).fill('');

        // Submit the form.

        // Expected Result: The error message "First Name is required." should be displayed.
        await page.locator('button[type=submit]').click();
        // Check for the error message "First Name is required
        const firstnameerrorMessage = await page.locator(
            'text=First Name is required.',
        );
        await expect(firstnameerrorMessage).toBeVisible({ timeout: 5000 });
    });
});
//___________________________________________________________________________________________________________________________

// Test Case 4: Verify Error Message for Empty last name
// Description: Ensure that the customer details are successfully updated when valid data is entered.
test.describe('Missing data3', () => {
    test('login', async ({ page }) => {
        // Navigate to the login page.
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

        //empty password

        await page.getByRole('textbox', { name: 'Password' }).fill('password');
        await page.getByRole('textbox', { name: 'First Name' }).fill('Testino');
        await page.getByRole('textbox', { name: 'Last Name' }).fill('');
        await page
            .getByRole('textbox', { name: 'Email' })
            .fill('something@a.a');
        await page
            .getByRole('textbox', { name: 'Mobile Number' })
            .fill('1234567891');
        await page
            .getByRole('textbox', { name: 'Date Of Birth' })
            .fill('1982-03-12');

        // Submit the form.

        // Expected Result: The error message "Last Name is required is required." should be displayed.
        await page.getByRole('button', { name: 'Update' }).click();

        // Check for the error message "Last Name is required is required."
        const lastnameerrorMessage = await page.locator(
            'text=Last Name is required.',
        );
        await expect(lastnameerrorMessage).toBeVisible({ timeout: 5000 });
    });
});

//___________________________________________________________________________________________________________________________

// Test Case 5: Verify Error Message for Empty mail
// Description: Ensure that error messages are displayed when required fields are left empty and the form is submitted.
test.describe('Missing data4', () => {
    test('login', async ({ page }) => {
        // Navigate to the login page.
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

        //empty email
        await page.getByRole('textbox', { name: 'Password' }).fill('password');
        await page.getByRole('textbox', { name: 'First Name' }).fill('Testino');
        await page.getByRole('textbox', { name: 'Last Name' }).fill('Lastname');
        await page.getByRole('textbox', { name: 'Email' }).fill('');
        await page
            .getByRole('textbox', { name: 'Mobile Number' })
            .fill('1234567891');
        await page
            .getByRole('textbox', { name: 'Date Of Birth' })
            .fill('1982-03-12');

        // Submit the form.

        // Expected Result: The error message "Email is required." should be displayed.
        await page.locator('button[type=submit]').click();
        // Check for the error message "Email is required."
        const emailErrorMessage = await page.locator('text=Email is required.');
        await expect(emailErrorMessage).toBeVisible({ timeout: 5000 });
    });
});

//___________________________________________________________________________________________________________________________

// Test Case 6: Verify Error Message for Empty phone

test.describe('Missing data5', () => {
    test('login', async ({ page }) => {
        // Navigate to the login page.
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

        //empty password
        await page.getByRole('textbox', { name: 'Password' }).fill('password');
        await page.getByRole('textbox', { name: 'First Name' }).fill('Testino');
        await page.getByRole('textbox', { name: 'Last Name' }).fill('Lastname');
        await page
            .getByRole('textbox', { name: 'Email' })
            .fill('something@a.a');
        await page.getByRole('textbox', { name: 'Mobile Number' }).fill('');
        await page
            .getByRole('textbox', { name: 'Date Of Birth' })
            .fill('1982-03-12');

        // Expected Result: The error message "In future we will update the user data" should be displayed.
        await page.waitForURL(
            'http://localhost:4200/user-update?username=tester',
        );

        // Verify the URL contains the query parameters
        await expect(page.url()).toBe(
            'http://localhost:4200/user-update?username=tester',
        );

        // Submit the form.
        await page.locator('button[type=submit]').click();

        // Submit the form.

        // Expected Result: The error message "Phone Number is required." should be displayed.

        // Check for the error message "Phone Number is required."
        const phoneErrorMessage = await page.locator(
            'text=Phone Number is required',
        );
        await expect(phoneErrorMessage).toBeVisible({ timeout: 5000 });

        // await page.pause();
    });
});

//___________________________________________________________________________________________________________________________

// Test Case 7: Verify Error Message for Empty date of birth
test.describe('Missing data6', () => {
    test('login', async ({ page }) => {
        // Navigate to the login page.
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
            // expect(dialog.message()).toContain('Login Successful');
            await dialog.dismiss();
        });

        //empty data
        await page.getByRole('textbox', { name: 'Password' }).fill('password');
        await page.getByRole('textbox', { name: 'First Name' }).fill('Testino');
        await page.getByRole('textbox', { name: 'Last Name' }).fill('Lastname');
        await page
            .getByRole('textbox', { name: 'Email' })
            .fill('something@a.a');
        await page
            .getByRole('textbox', { name: 'Mobile Number' })
            .fill('1234567891');
        await page.getByRole('textbox', { name: 'Date Of Birth' }).fill('');
        // Expected Result: The error message "In future we will update the user data" should be displayed.
        await page.waitForURL(
            'http://localhost:4200/user-update?username=tester',
        );

        // Verify the URL contains the query parameters
        await expect(page.url()).toBe(
            'http://localhost:4200/user-update?username=tester',
        );

        // Submit the form.
        await page.locator('button[type=submit]').click();

        // Submit the form.

        // Expected Result: The error message "Date of Birth is required." should be displayed.

        // Check for the error message "Date of Birth is required."
        const errorMessage = await page.locator(
            'text=Date of Birth is required',
        );
        await expect(errorMessage).toBeVisible({ timeout: 5000 });

        // await page.pause();
    });
});

// ____________________________________________________________________________________
// Test Case 8: Successfull login
test.describe('Successfull login', () => {
    test('login', async ({ page }) => {
        // Navigate to the login page.
        await page.goto('http://localhost:4200');
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

        // Expected Result: The error message "In future we will update the user data" should be displayed.
        await page.waitForURL(
            'http://localhost:4200/user-update?username=tester',
        );

        // Verify the URL contains the query parameters
        await expect(page.url()).toBe(
            'http://localhost:4200/user-update?username=tester',
        );

        // Submit the form.
        await page.locator('button[type=submit]').click();
    });
});

function getByRole(arg0: string, arg1: { name: string }) {
    throw new Error('Function not implemented.');
}

function getByText(arg0: string) {
    throw new Error('Function not implemented.');
}
