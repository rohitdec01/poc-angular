import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmployeeService } from 'src/app/service/Employee.service';
import * as EmployeeActions from './employee.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class EmployeeEffects {
    constructor(private actions$: Actions, private employeeService: EmployeeService) { }

    loadEmployees$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(EmployeeActions.loadEmployeesAction),
            mergeMap(() => this.employeeService.getEmployeeList().pipe(
                map(employeeLst => EmployeeActions.loadEmployeesSuccessAction({ employeeLst }))
            ))
        )
    })

    deleteEmployee$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(EmployeeActions.deleteEmployeeAction),
            mergeMap(action =>
                this.employeeService.deleteEmployee(action.employeeId).pipe(
                    map(() => EmployeeActions.deleteEmployeeSuccessAction({ employeeId: action.employeeId })),
                    catchError(error => of(EmployeeActions.deleteEmployeeFailtureAction({ error })))
                )
            )
        )
    })

    addEmployee$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(EmployeeActions.addEmployeeAction),
            mergeMap(action =>
                this.employeeService.addEmployee(action.employee).pipe(
                    map((employee) => EmployeeActions.addEmployeeSuccessAction({ employee: employee })),
                    catchError(error => of(EmployeeActions.addEmployeeFailtureAction({ error })))
                )
            )
        )
    })

    updateEmployee$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(EmployeeActions.updateEmployeeAction),
            mergeMap(action =>
                this.employeeService.updateEmployee(action.employeeId, action.employee).pipe(
                    map((employee) => EmployeeActions.updateEmployeeSuccessAction({ employee: employee })),
                    catchError(error => of(EmployeeActions.updateEmployeeFailtureAction({ error })))
                )
            )
        )
    })
}