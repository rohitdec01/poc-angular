import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AdminGuard } from 'src/app/guard/admin.guard';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { AdminComponent } from './admin/admin.component';

const routes: Route[] = [
    { component: AdminComponent, path: '', canActivate: [AuthGuard, AdminGuard] },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
