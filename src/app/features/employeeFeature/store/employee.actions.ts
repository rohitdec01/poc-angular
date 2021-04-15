import { createAction, props } from "@ngrx/store";
import { Employee } from "../Employee";

// Note: Actions can have two arguments. 
export const loadEmployeesAction = createAction('[employeeLst] load employees');

// Note: Second argument is associate data which defines using props.
export const loadEmployeesSuccessAction = createAction('[employeeLst] load employees success',
    props<{ employeeLst: Employee[] }>()
);

export const loadEmployeesFailure = createAction('[employeeLst] load employees failture');