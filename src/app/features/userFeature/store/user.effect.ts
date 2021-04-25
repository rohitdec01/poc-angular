import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { UserService } from "src/app/service/user.service";
import * as UserLoginAction from './user.action';

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private userService: UserService, private router: Router) { }

    loginUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UserLoginAction.userLoginAction),
            mergeMap((action) => this.userService.getAuthToken(action.userName, action.password).pipe(
                // Note: we will only get token from this request because in reality we will get only token from this type of request after login.
                map(user => {
                    const token: string = user[0].token;
                    this.userService.saveToken(token);

                    this.userService.saveUserDetail(user);
                            this.router.navigate(['employees']);
                            return UserLoginAction.getUserDetailSuccessAction({
                                user: user[0]
                            })
                    
                            // TODO: need to check why consequtive calls are not working here.
                    // Note: get the user detail after getting successfull token 
                    /*this.userService.getUserDetail(token).pipe(
                        map(userDetail => {
                            // Note: Save the user detail to the local storage to support at that time when user refresh and 
                            // we want user to be login even after refresh
                            this.userService.saveUserDetail(userDetail);
                            this.router.navigate(['employees']);
                            return UserLoginAction.getUserDetailSuccessAction({
                                user: user[0]
                            })
                        })
                    )*/
                    // return null;
                })
            ))
        )
    })
}

/*this.userService.getAuthToken(this.email, this.password).subscribe((result) => {
      if (result.length > 0) { // In reality it will always return one JWT token bases on the user/password.
        this.userService.saveToken(result[0].token)
        this.userService.getUserDetail(result[0].token).subscribe((loginedInUser) => {
          this.userService.userDetailsCache.next(loginedInUser[0])
          this.userService.saveUserDetail(loginedInUser)
          this.router.navigate(['employees'])
        })
      } else {
        console.log('No user exist')
      }
    })*/