import { Page } from "playwright/test";

export class LoginPage {

    page: any;
    url: string;
  nameInput: any;
  passwordInput: any;
  submitButton: any;  
  static nameInput: any;
  static passwordInput: any;



    constructor(page: any) {
      this.page = page;
      this.url = 'http://localhost:4200/';
      this.nameInput = page.locator('input[name="name"]');
      this.passwordInput = page.locator('input[name="password"]');
      this.submitButton = page.locator('button[type=submit]');
    }
}