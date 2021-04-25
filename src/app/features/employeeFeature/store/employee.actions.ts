import { createAction, props } from "@ngrx/store";
import { Employee } from "../Employee";

// ******************** Load Actions *******************************
export const loadEmployeesAction = createAction('[employeeLst] load employees');
export const loadEmployeesSuccessAction = createAction('[employeeLst] load employees success',
    props<{ employeeLst: Employee[] }>()
);
export const loadEmployeesFailure = createAction('[employeeLst] load employees failture',
    props<{ error: string }>());

// ************************* Delete Actions ***************************************************
export const deleteEmployee = createAction('[deleteEmployee employee delete action',
    props<{ employeeId: number }>())
export const deleteEmployeeSuccessAction = createAction('[deleteEmployee] employee delete action success',
    props<{ employeeId: number }>())
export const deleteEmployeeFailtureAction = createAction('[deleteEmployee] employee delete action failture',
    props<{ error: string }>())
// ******************************************************************************************

