import { state } from '@angular/animations';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import * as AppState from '../../../store/app.state';
import { User } from '../user';
import { UserModule } from '../user.module';
import * as UserActions from './user.action';

export const userFeatureKey = 'user';

export interface State extends AppState.state { // extend  main application state
    userInfo: UserState;
}

export interface UserState {
    user: User,
    token: string
}

const initialState: UserState = {
    user: null,
    token: ''
}

// Note: Selector is a kind of query in the store. This will return the whole user state
const userFeatureState = createFeatureSelector<UserState>(userFeatureKey);

// Note: Get user using selector from the above employeeFeatureState
export const userSelector = createSelector(
    userFeatureState,
    state => state as UserState
)

export const userReducer = createReducer<UserState>(
    initialState,
    on(UserActions.userLoginAction, (state): UserState => {
        return { // Note: return the new state of the object
            ...state
            /*,
            user: {
                email: 'test',
                name: 'test',
                roles: ['user'],
                id: 1,
                password: '',
                token: ''
            } as User,
            token: 'test token'*/
        }
    }),
    on(UserActions.getUserDetailSuccessAction, (state, action): UserState => {
        return {
            ...state,
            user: action.user,
            token: action.user.token
        }
    }));