import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { HeaderComponent } from './features/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    /*AdminComponent,
    ListEmployeeComponent,
    LoginComponent,
    RegisterComponent,
    AddUpdateEmployeeComponent*/
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CookieModule.forRoot(),
    //EmployeeModule, // Note: We should not add this to support lazy loading. See app routing module
    //AdminModule, // Note: We should not add this to support lazy loading. See app routing module
    //UserModule, //  Note: We should not add this to support lazy loading. See app routing module
    AppRoutingModule, // Note: This should be last because of wild card route other wise it will always gona land in winld card route
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
