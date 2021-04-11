import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmployeeService } from 'src/app/service/Employee.service';
import { employeeAction } from '../state/employee.actions';
import { getEmployeesSelector, State } from '../state/employee.reducer';
import * as EmployeeActions from '../state/employee.actions';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  public employees: any

  constructor(private appService: EmployeeService, private store: Store<State>) {
  }

  ngOnInit(): void {
    // this.getEmployeeList()
    this.store.select(getEmployeesSelector).subscribe(
      employees => {
        this.employees = employees;
        console.log('list of employees', employees);
      }
    )
    this.store.dispatch(EmployeeActions.employeeAction());
  }

  deleteEmployee(id: any) {
    this.appService.deleteEmployee(id).subscribe((result) => {
      this.getEmployeeList()
      console.log('Employee Deleted.') // fetch employee list again.
    })
  }

  getEmployeeList() {
    this.appService.getEmployeeList().subscribe((result) => {
      this.employees = result
    })
  }
}

