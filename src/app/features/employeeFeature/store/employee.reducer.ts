import { createAction, on, createReducer, createFeatureSelector, createSelector } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";
import * as AppState from '../../../store/app.state';
import { Employee } from '../Employee';
import * as EmployeeActions from './employee.actions';

export const employeeFeatureKey = 'employee';

export interface State extends AppState.state { // extend  main application state
    employee: EmployeeState;
}

export interface EmployeeState {
    employees: Employee[]
}

const initialState: EmployeeState = {
    employees: []
}

// Note: Selector is a kind of query in the store. This will return the whole employee state
const getEmployeeFeatureState = createFeatureSelector<EmployeeState>(employeeFeatureKey);

// Note: Get list of employee using selector from the above employeeFeatureState
export const getEmployeesSelector = createSelector(
    getEmployeeFeatureState,
    state => state.employees
)

export const employeeReducer = createReducer<EmployeeState>(
    initialState,
    on(EmployeeActions.loadEmployeesAction, (state): EmployeeState => {
        return { // Note: return the new state of the object
            ...state
        }
    }),
    on(EmployeeActions.loadEmployeesSuccessAction, (state, action): EmployeeState => {
        return {
            ...state,
            employees: action.employees
        }
    })
);