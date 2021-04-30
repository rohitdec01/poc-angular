import { createAction, props } from "@ngrx/store";
import { Employee } from "../Employee";
import { EmployeeEffects } from "./employee.effects";

// ******************** Load Actions *******************************
export const loadEmployeesAction = createAction('[employeeLst] load employees');
export const loadEmployeesSuccessAction = createAction('[employeeLst] load employees success',
    props<{ employeeLst: Employee[] }>()
);
export const loadEmployeesFailure = createAction('[employeeLst] load employees failture',
    props<{ error: string }>());

// ************************* Delete Actions ***************************************************
export const deleteEmployee = createAction('[deleteEmployee employee action',
    props<{ employeeId: number }>())
export const deleteEmployeeSuccessAction = createAction('[deleteEmployee] employee delete action success',
    props<{ employeeId: number }>())
export const deleteEmployeeFailtureAction = createAction('[deleteEmployee] employee delete action failture',
    props<{ error: string }>())
// ****************************** Add Actions ***********************************************
export const addEmployee = createAction('[addEmployee employee action',
    props<{ employee: Employee }>())
export const addEmployeeSuccessAction = createAction('[addEmployee] employee action success',
    props<{ employee: Employee }>())
export const addEmployeeFailtureAction = createAction('[addEmployee] employee action failture',
    props<{ error: string }>())
