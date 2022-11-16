import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependentsComponent } from './dependents.component';

const routes: Routes = [{ path: '', component: DependentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DependentsRoutingModule { }
