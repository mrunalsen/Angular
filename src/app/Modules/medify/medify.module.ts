import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedifyRoutingModule } from './medify-routing.module';
import { MedifyComponent } from './medify.component';
import { ProjectPresentationComponent } from './project-presentation/project-presentation.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MedifyComponent,
    ProjectPresentationComponent
  ],
  imports: [
    CommonModule,
    MedifyRoutingModule,
    SharedModule
  ]
})
export class MedifyModule { }
