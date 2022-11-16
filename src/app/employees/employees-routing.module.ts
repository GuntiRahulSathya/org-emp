import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeescreateComponent } from './employeescreate/employeescreate.component';
import { EmployeesupdateComponent } from './employeesupdate/employeesupdate.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent }
  , { path: 'create', component : EmployeescreateComponent }
  , { path: 'update', component : EmployeesupdateComponent }
  // , {path: '', redirectTo: ''}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
