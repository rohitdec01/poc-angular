import { createAction, props } from "@ngrx/store";
import { User } from "../user";

// Note: Actions can have two arguments. Here second argument is the parameters which we want to pass to the service. 
export const userLoginAction = createAction('[login] login user',
    props<
    { 
        userName: string, 
        password: string
    }
    >());

// Note: Second argument is associate data which defines using props.
export const getUserDetailSuccessAction = createAction('[login] get user detail success',
    props<{ user: User }>()
);