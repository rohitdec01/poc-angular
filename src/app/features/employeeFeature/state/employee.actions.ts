import { createAction } from "@ngrx/store";

// Note: Actions can have two arguments. 
// Second argument can have associate data which will define using props. Fo now this is not needed. 
export const employeeAction = createAction(
    '[employees] list of employees'
)