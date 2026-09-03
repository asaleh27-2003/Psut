import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  imports: [],
  templateUrl: './confirmation-dialog.html',
  styleUrl: './confirmation-dialog.css',
})
export class ConfirmationDialog {
 @Input()title:string = "";//type of the title to get this value from the parent component
 @Input()body:string = "";
 @Output() confirm=new EventEmitter<boolean>();
 confirmDelete(p:boolean)
 {
  this.confirm.emit(p);//activate confirm event and transfer value to the parent component
 }
}
