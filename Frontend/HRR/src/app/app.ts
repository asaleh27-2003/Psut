import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgClass, NgIf, NgStyle, } from '@angular/common';
import { NgFor } from '@angular/common';
import { RandomColor } from './directives/random-color';
// import{FormsModule,FormGroup}from'@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { validate } from '@angular/forms/signals';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, NgFor, NgClass, NgStyle, RandomColor, FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  stu = [
    { name: 'stu1', mark: 89 },
    { name: 'stu2', mark: 57 },
    { name: 'stu3', mark: 90 },
    { name: 'stu4', mark: 94 },
    { name: 'stu5', mark: 49 },
  ]
  name: string = "ahmad khara yousef zouft";
  form = new FormGroup(
    {
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(9), Validators.maxLength(10),]),
      course: new FormControl(1, Validators.required),
    }
  );
   submit()
  {
    alert(`welcome to the academy, ${this.form.value.name}
      we will contact you shortely about the  ${this.courses.find(x=>x.id==this.form.value.course)?.name}course`
    )};
  courses =
    [
      {
        id: 1, name: "asp"
      },
      {
        id: 2, name: "angular"
      }
    ]
  reset() {
    this.form.reset({
      course: 1
    });
  }
 price=22222.50;
 creationDate=new Date();
}