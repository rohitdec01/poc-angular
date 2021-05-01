import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getEmployeesSelector, State } from '../store/employee.reducer';
import * as EmployeeActions from '../store/employee.actions';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  public employees$: Observable<Employee[]>

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.employees$ = this.store.select(getEmployeesSelector);
    this.store.dispatch(EmployeeActions.loadEmployeesAction());
  }

  deleteEmployee(id: any) {
    this.store.dispatch(EmployeeActions.deleteEmployeeAction({ employeeId: id }));
    /*this.appService.deleteEmployee(id).subscribe((result) => {
      this.getEmployeeList()
      console.log('Employee Deleted.') // fetch employee list again.
    })*/
  }

  // Note: Now we are getting list using ngrxEffect 
  /*getEmployeeList() {
    this.appService.getEmployeeList().subscribe((result) => {
      this.employees = result
    })
  }*/
}

