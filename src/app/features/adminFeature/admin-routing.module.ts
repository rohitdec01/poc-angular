import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Route[] = [
    { component: AdminComponent, path: '' }, // , canActivate: [AuthGuard, AdminGuard]
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
