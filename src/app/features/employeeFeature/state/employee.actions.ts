import { createAction, props } from "@ngrx/store";
import { Employee } from "../Employee";

// Note: Actions can have two arguments. 
export const loadEmployeesAction = createAction('[employees] load employees');

// Note: Second argument is associate data which defines using props.
export const loadEmployeesSuccessAction = createAction('[employees] load employees success',
    props<{ employees: Employee[] }>()
);

export const loadEmployeesFailure = createAction('[employees] load employees failture');