import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { AddUpdateEmployeeComponent } from './add-update-employee/add-update-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';

const routes: Route[] = [
    { component: ListEmployeeComponent, path: '', canActivate: [AuthGuard] },
    { component: AddUpdateEmployeeComponent, path: 'add', canActivate: [AuthGuard] },
    { component: AddUpdateEmployeeComponent, path: 'add/:id', canActivate: [AuthGuard] }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }
