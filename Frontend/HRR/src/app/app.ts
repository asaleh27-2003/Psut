import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgClass, NgIf, NgStyle, } from '@angular/common';
import { NgFor } from '@angular/common';
import { RandomColor } from './directives/random-color';
// import{FormsModule,FormGroup}from'@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';
import { ReversePipe } from './pipes/reverse-pipe';
import { Employees } from './components/employees/employees';
import { Departments } from "./components/departments/departments";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    NgIf,
    NgFor,
    NgClass,
    NgStyle,
    RandomColor,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ReversePipe,
    Employees, Departments],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}