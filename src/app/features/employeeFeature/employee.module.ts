import { NgModule } from '@angular/core';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AddUpdateEmployeeComponent } from './add-update-employee/add-update-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { employeeReducer } from './state/employee.reducer';

@NgModule({
  declarations: [ListEmployeeComponent, AddUpdateEmployeeComponent],
  imports: [
    EmployeeRoutingModule,
    SharedModule,
    StoreModule.forFeature('employee', employeeReducer), // Initialize our state for the Employee feature object. 
  ]
})
export class EmployeeModule { }
