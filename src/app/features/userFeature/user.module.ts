import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CookieModule } from 'ngx-cookie';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    UserRoutingModule,
    SharedModule,
    CookieModule.forRoot()
  ]
})
export class UserModule { }
