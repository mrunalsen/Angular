import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectionRoutingModule } from './projection-routing.module';
import { ProjectionComponent } from './projection.component';
import { ProjectionContainerComponent } from './projection-container/projection-container.component';
import { ProjectionPresentationComponent } from './projection-container/projection-presentation/projection-presentation.component';
import { ProjectionDataContainerComponent } from './projection-container/projection-data-container/projection-data-container.component';


@NgModule({
  declarations: [
    ProjectionComponent,
    ProjectionContainerComponent,
    ProjectionPresentationComponent,
    ProjectionDataContainerComponent
  ],
  imports: [
    CommonModule,
    ProjectionRoutingModule
  ]
})
export class ProjectionModule { }
