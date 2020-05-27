import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  selectedEmployeeCountRadioButton: string;
  employees: any[];
  errorMsg: string;
  statusMessage: string = 'Loading data. Please wait...';

  constructor(private _employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(data => this.employees = data,
      error => this.errorMsg = error);
  }

  getAllEmployeesCount(): number {
    return this.employees.length;
  }

  getMaleEmployeesCount(): number {
    return this.employees.filter(em => em.gender === 'Male').length;
  }

  getFemaleEmployeesCount(): number {
    return this.employees.filter(em => em.gender === 'Female').length;
  }

  onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
  }

  trackByEmpCode(index: number, employee: any): string {
    return employee.code;
  }


}
