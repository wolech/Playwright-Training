import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-endpage',
  templateUrl: './endpage.component.html',
  styleUrls: ['./endpage.component.css'],
  imports: [CommonModule, MatSelectModule, FormsModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatCardModule],
})
export class EndpageComponent {
  Carmake01!: string;
  Carcolor2!: string;
  Fueltype3!: string;
  Capacity4!: string;
  Mileage5!: string;
  carman: string[] = ['Renault', 'BMW', 'Skoda'];
  color: string[] = ['Red', 'Blue', 'Green', 'Black', 'White'];
  fueltype: string[] = ['Petrol', 'Diesel', 'Electric'];
  engine: string[] = ['1.0', '1.5', '2.0'];
  mileage: string[] = ['<=100K', '100K - 200K', '>200K'];
}

