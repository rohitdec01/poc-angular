import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CookieModule } from 'ngx-cookie';
import { StoreModule } from '@ngrx/store';
import { userFeatureKey, userReducer } from './store/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user.effect';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    UserRoutingModule,
    SharedModule,
    CookieModule.forRoot(),
    StoreModule.forFeature(userFeatureKey, userReducer), // Note: Initialize our state for the user feature object.
    EffectsModule.forFeature([UserEffects]) 
  ]
})
export class UserModule { }
