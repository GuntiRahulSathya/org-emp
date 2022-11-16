import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependentsRoutingModule } from './dependents-routing.module';
import { DependentsComponent } from './dependents.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    DependentsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    DependentsRoutingModule
  ]
})
export class DependentsModule { }
