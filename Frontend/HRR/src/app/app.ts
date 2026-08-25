import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass, NgIf, NgStyle, } from '@angular/common';
import { NgFor } from '@angular/common';
import { RandomColor} from './directives/random-color';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgIf,NgFor,NgClass,NgStyle,RandomColor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
stu=[
{name:'stu1',mark:89},
{name:'stu2',mark:57},
{name:'stu3',mark:90},
{name:'stu4',mark:94},
{name:'stu5',mark:49},
]}