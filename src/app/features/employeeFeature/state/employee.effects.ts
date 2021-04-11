import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmployeeService } from 'src/app/service/Employee.service';
import * as EmployeeActions from '../state/employee.actions';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class EmployeeEffects {
    constructor(private actions$: Actions, private employeeService: EmployeeService) { }

    loadEmployees$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(EmployeeActions.loadEmployeesAction),
            mergeMap(() => this.employeeService.getEmployeeList().pipe(
                map(employees => EmployeeActions.loadEmployeesSuccessAction({ employees }))
            ))
        )
    })
}