import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressFormRoutingModule } from './progress-form-routing.module';
import { ProgressFormComponent } from './progress-form.component';
import { ProgressFormContainerComponent } from './progress-form-container/progress-form-container.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProgressFormComponent,
    ProgressFormContainerComponent
  ],
  imports: [
    CommonModule,
    ProgressFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProgressFormModule { }
