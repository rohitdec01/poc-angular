import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/service/user.service';
import { State } from '../store/user.reducer';
import * as UserActions from '../store/user.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string
  password: string

  constructor(private userService: UserService, private router: Router, private store: Store<State> ) {
  }

  ngOnInit(): void {
  }

  logInHandler() {

    this.store.dispatch(UserActions.userLoginAction());

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
  }

}
