import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
    FormBuilder,
    FormGroup,
    Validators,
    ReactiveFormsModule,
} from '@angular/forms';
import { UserCrudOperationsService } from '../user-crud-operations.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
    selector: 'app-user-update',
    imports: [
        HttpClientModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        MatDatepickerModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        RouterModule,
    ],
    templateUrl: './user-update.component.html',
    styleUrl: './user-update.component.css',
    providers: [UserCrudOperationsService],
})
export class UserUpdateComponent implements OnInit {
    userForm!: FormGroup;

    user = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateofBirth: '',
        passwordErrorMessage: '',
        firstNameErrorMessage: '',
        lastNameErrorMessage: '',
        emailErrorMessage: '',
        phoneErrorMessage: '',
        dateofBirthErrorMessage: '',
        errorMessage: '',
    };

    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private userService: UserCrudOperationsService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.userForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: [{ value: '', disabled: true }],
            password: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.pattern('^\\d{10}$')]],
            dateofBirth: ['', Validators.required],
        });
        // Retrieve the username from the query parameters
        this.route.queryParams.subscribe((params) => {
            this.user.username = params['username'] || '';
            this.userForm.patchValue({ username: this.user.username });
            this.loadUserData(this.user.username);
        });
    }

    loadUserData(username: string) {
        this.userService.getUserData(username).subscribe((data) => {
            if (data.length > 0) {
                this.user.username = data[0].username;
                this.user.password = data[0].password;
                this.user.firstName = data[0].firstName;
                this.user.lastName = data[0].lastName;
                this.user.email = data[0].email;
                this.user.phone = data[0].phone;
                this.user.dateofBirth = new Date(data[0].dateofBirth)
                    .toISOString()
                    .split('T')[0];
                this.userForm.patchValue(this.user);
            } else {
                this.user.errorMessage = 'User not found';
            }
        });
    }

    onSubmit() {
        if (this.userForm.invalid) {
            this.userForm.markAllAsTouched();
            return;
        }

        if (this.userForm.valid) {
            this.user.errorMessage = '';
            // Update the user data based on the username

            alert('In future we will update the user data');
            this.router.navigate(['/endpage']);
        } else {
            this.user.errorMessage = 'User data not updated. Check the data';
        }
    }

    onReset() {
        const username = this.userForm.get('username')?.value || '';
        this.userForm.reset();
        this.userForm.patchValue({ username: username });
    }
}
