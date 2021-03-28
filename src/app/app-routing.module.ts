import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

const routes: Route[] = [
  { component: HomeComponent, path: '', pathMatch: 'full' },
  // Note: Dynamically load the Employee, admin module, user module
  { path: 'employees', loadChildren: () => import('src/app/features/employeeFeature/employee.module').then(m => m.EmployeeModule) },
  { path: 'user', loadChildren: () => import('src/app/features/userFeature/user.module').then(m => m.UserModule) },
  { path: 'admin', loadChildren: () => import('src/app/features/adminFeature/admin.module').then(m => m.AdminModule) },
  { path: '**', component: HomeComponent }, // Note: should be last in the route
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
