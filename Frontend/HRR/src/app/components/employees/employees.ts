import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { Employee } from '../../Inetrfaces/IEmployee';
import { ConfirmationDialog } from '../../shared-components/confirmation-dialog/confirmation-dialog';

@Component({
  selector: 'app-employees',
  imports: [CommonModule, ReactiveFormsModule,NgxPaginationModule,ConfirmationDialog],
  providers: [DatePipe],//Dependency injection for date pipe to be used in the component
  templateUrl: './employees.html',
  styleUrl: './employees.css',
})
export class Employees {
  @ViewChild('closebutton') closebutton: ElementRef | undefined;
  employees: Employee[] =
    [
      {
        id: 1, name: "emp1", isActive: true
        , startDate: new Date(2026, 10, 26)
        , positionId: 1,
        positionname: "manager"
        , birthdate: new Date(2002, 10, 26)
        , departmentId: 1,
        departmentName: "HR",
        managerId: null,
        phone: "+962788835605"
      },
      {
        id: 2, name: "emp1", isActive: true
        , startDate: new Date(2026, 10, 26)
        , positionId: 1,
        positionname: "manager"
        , birthdate: new Date(2002, 10, 26)
        , departmentId: 1,
        departmentName: "HR",
        managerId: null,
        phone: "+962788835605"

      },
      {
        id: 3, name: "emp2", isActive: true
        , startDate: new Date(2026, 10, 26)
        , positionId: 1,
        positionname: "Developer"
        , birthdate: new Date(2002, 10, 26)
        , departmentId: 2,
        departmentName: "IT",
        managerId: null,
        phone: "+962788831605",
        managerName: "Emp1"
      },
      {
        id: 4, name: "emp3", isActive: true
        , startDate: new Date(2026, 10, 26)
        , positionId: 2,
        positionname: "Developer"
        , birthdate: new Date(2002, 10, 26)
        , departmentId: 2,
        departmentName: "IT",
        managerId: null,
        phone: "+962788875605",
        managerName: "Emp2"
      },
      { id: 5, name: "Mbtoush10", isActive: true, startDate: new Date(2026, 10, 26) },
      { id: 6, name: "Mbtoush10", isActive: true, startDate: new Date(2026, 10, 26) },
      { id: 7, name: "Mbtoush10", isActive: true, startDate: new Date(2026, 10, 26) },
      { id: 8, name: "Mbtoush10", isActive: true, startDate: new Date(2026, 10, 26) },
      { id: 9, name: "Mbtoush10", isActive: true, startDate: new Date(2026, 10, 26) },
      { id: 10, name: "Mbtoush10", isActive: true, startDate: new Date(2026, 10, 26) },
      { id: 11, name: "Mbtoush10", isActive: true, startDate: new Date(2026, 10, 26) },
      { id: 12, name: "Mbtoush10", isActive: true, startDate: new Date(2026, 10, 26) },
    ];
  employeesTableColoumns: string[] = ["#", "Name", "Phone", "BirthDate", "Status", "StartDate", "Position", "Department", "Manager"];
  departments = [
    { id: null, name: "select departments" },
    { id: 1, name: "HR" },
    { id: 2, name: "IT" }
  ]
  positions = [
    { id: null, name: "select positions" },
    { id: 1, name: "Manager" },
    { id: 2, name: "Developer" },
    { id: 3, name: "HR" }

  ];

  managers = [
    { id: null, name: "select Manager" },
    { id: 1, name: "Emp1" },
    { id: 2, name: "Emp2" }
  ];

  employeeform: FormGroup = new FormGroup({
    Id: new FormControl(null),
    Name: new FormControl(null, [Validators.required]),
    Phone: new FormControl(null, [Validators.required]),
    Birthdate: new FormControl(null),
    StartDate: new FormControl(null, [Validators.required]),
    Department: new FormControl(null, [Validators.required]),
    Manager: new FormControl(null),
    Position: new FormControl(null, [Validators.required]),
    IsActive: new FormControl(true, [Validators.required])
  });
  paginationConfig = {
    itemsPerPage:5,
    currentPage:1,
  }
  deleteDialogTitle:string="Delete Confirmation";
  deleteDialogBody:string="Are you sure you want to delete this employee?"
  showConfirmationDialog:boolean=false;
  employeeIdToDelete:number|null=null;
  saveEmployee() {
    if (!this.employeeform.value.Id) {
      let newemp: Employee = {
        id: this.employees[this.employees.length - 1].id + 1,
        name: this.employeeform.value.Name,
        phone: this.employeeform.value.Phone,
        birthdate: this.employeeform.value.Birthdate,
        startDate: this.employeeform.value.StartDate,
        departmentId: this.employeeform.value.Department,
        departmentName: this.departments.find(d => d.id == this.employeeform.value.Department)?.name,
        managerId: this.employeeform.value.Manager,
        managerName: this.employeeform.value.Manager ? this.managers.find(m => m.id == this.employeeform.value.Manager)?.name : null,
        positionId: this.employeeform.value.Position,
        positionname: this.positions.find(p => p.id == this.employeeform.value.Position)?.name,
        isActive: this.employeeform.value.IsActive
      };
      this.employees.push(newemp);
      this.closebutton?.nativeElement.click();
      this.clearForm();
    }
    else {
      let index = this.employees.findIndex(e => e.id == this.employeeform.value.Id);
      this.employees[index].name = this.employeeform.value.Name;
      this.employees[index].phone = this.employeeform.value.Phone;
      this.employees[index].birthdate = this.employeeform.value.Birthdate;
      this.employees[index].startDate = this.employeeform.value.StartDate;
      this.employees[index].departmentId = this.employeeform.value.Department;
      this.employees[index].departmentName = this.departments.find(d => d.id == this.employeeform.value.Department)?.name;
      this.employees[index].managerId = this.employeeform.value.Manager;
      this.employees[index].managerName = this.employeeform.value.Manager ? this.managers.find(m => m.id == this.employeeform.value.Manager)?.name : null;
      this.employees[index].positionId = this.employeeform.value.Position;
      this.employees[index].positionname = this.positions.find(p => p.id == this.employeeform.value.Position)?.name;
      this.employees[index].isActive = this.employeeform.value.IsActive;
      this.closebutton?.nativeElement.click();
      this.clearForm();
    }

  }
  clearForm() {
    this.employeeform.reset({
      IsActive: true
    })
  }
  constructor(private datePipe: DatePipe) {

  }
  removeEmployee() {
    this.employees = this.employees.filter(x => x.id !== this.employeeIdToDelete);
    // let index = this.employees.findIndex(e => e.id === id);
    // this.employees.splice(index, 1);
  }
  editEmployee(id: number) {
    let emp = this.employees.find(e => e.id == id);
    if (id != null) {
      this.employeeform.patchValue({
        Id: emp?.id,//to confirm which employee is being edited
        Name: emp?.name,
        Phone: emp?.phone,
        Birthdate: this.datePipe.transform(emp?.birthdate, 'yyyy-MM-dd'),//yyyy-MM-dd 2026-10-26
        StartDate: this.datePipe.transform(emp?.startDate, 'yyyy-MM-dd'),
        Department: emp?.departmentId,
        Manager: emp?.managerId,
        Position: emp?.positionId,
        IsActive: emp?.isActive
      })
      this.closebutton?.nativeElement.click();
    }
  }
  changePage($event:number)
  {
    this.paginationConfig.currentPage=$event;
  }
  showConfirmDialog(id:number)
  {
    this.employeeIdToDelete=id;
    this.showConfirmationDialog=true;

  }
  ConfirmEmpDelete(IsConfirm:boolean)
  {
    if(IsConfirm)
    {
      this.removeEmployee();
    }
    this.showConfirmationDialog=false;
    this.employeeIdToDelete=null;
  }
}





