import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedifyRoutingModule } from './medify-routing.module';
import { MedifyComponent } from './medify.component';
import { ProjectPresentationComponent } from './project-presentation/project-presentation.component';
import { GoogleChartsModule } from 'angular-google-charts';


@NgModule({
  declarations: [
    MedifyComponent,
    ProjectPresentationComponent
  ],
  imports: [
    CommonModule,
    MedifyRoutingModule,
    GoogleChartsModule
  ]
})
export class MedifyModule { }
