import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarRoutingModule } from './progress-bar-routing.module';
import { ProgressBarComponent } from './progress-bar.component';
import { ProgressBarPresentationComponent } from './progress-bar-presentation/progress-bar-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProgressBarComponent,
    ProgressBarPresentationComponent
  ],
  imports: [
    CommonModule,
    ProgressBarRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProgressBarModule { }
