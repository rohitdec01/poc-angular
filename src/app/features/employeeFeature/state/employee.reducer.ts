import { createAction, on, createReducer, createFeatureSelector, createSelector } from "@ngrx/store";
import { EmployeeService } from "src/app/service/Employee.service";
import * as AppState from '../../../state/app.state';
import { Employee } from '../Employee';
import * as EmployeeActions from './employee.actions';

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
const getEmployeeFeatureState = createFeatureSelector<EmployeeState>('employee');

// Note: Get list of employee using selector from the above employeeFeatureState
export const getEmployeesSelector = createSelector(
    getEmployeeFeatureState,
    state => state.employees
)

export const employeeReducer = createReducer<EmployeeState>(
    initialState,
    on(EmployeeActions.employeeAction, (state): EmployeeState => {
        return { // Note: return the new state of the object
            ...state,
            employees: [
                {
                    id: 1,
                    name: "from store",
                    address: "Chicago IL",
                    mobile: "33333333",
                    email: "test3@test3.com"
                }
            ]
        }
    })
)