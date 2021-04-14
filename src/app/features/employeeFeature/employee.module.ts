import { NgModule } from '@angular/core';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AddUpdateEmployeeComponent } from './add-update-employee/add-update-employee.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { employeeFeatureKey, employeeReducer } from './store/employee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './store/employee.effects';

@NgModule({
  declarations: [ListEmployeeComponent, AddUpdateEmployeeComponent],
  imports: [
    EmployeeRoutingModule,
    SharedModule,
    StoreModule.forFeature(employeeFeatureKey, employeeReducer), // Note: Initialize our state for the Employee feature object.
    // Note: Register the employee Effect here in the employeeFeture module to support lazy loading feature.
    EffectsModule.forFeature([EmployeeEffects]) 
  ]
})
export class EmployeeModule { }
