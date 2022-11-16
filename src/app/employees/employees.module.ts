import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { EmployeescreateComponent } from './employeescreate/employeescreate.component';
import { EmployeesupdateComponent } from './employeesupdate/employeesupdate.component';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeescreateComponent,
    EmployeesupdateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
