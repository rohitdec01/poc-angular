import { NgModule } from '@angular/core';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AddUpdateEmployeeComponent } from './add-update-employee/add-update-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ListEmployeeComponent, AddUpdateEmployeeComponent],
  imports: [
    EmployeeRoutingModule,
    SharedModule
  ]
})
export class EmployeeModule { }
