import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressBarRoutingModule } from './progress-bar-routing.module';
import { ProgressBarComponent } from './progress-bar.component';
import { ProgressBarPresentationComponent } from './progress-bar-presentation/progress-bar-presentation.component';


@NgModule({
  declarations: [
    ProgressBarComponent,
    ProgressBarPresentationComponent
  ],
  imports: [
    CommonModule,
    ProgressBarRoutingModule
  ]
})
export class ProgressBarModule { }
