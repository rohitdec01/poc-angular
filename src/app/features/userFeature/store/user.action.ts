import { createAction, props } from "@ngrx/store";
import { User } from "../user";

// Note: Actions can have two arguments. 
export const userLoginAction = createAction('[login] login user');

// Note: Second argument is associate data which defines using props.
export const getUserDetailSuccessAction = createAction('[login] get user detail success',
    props<{ user: User }>()
);