import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { MentorComponent } from './mentor.component';
import { MentorListContainerComponent } from './mentor-list-container/mentor-list-container.component';
import { MentorFormContainerComponent } from './mentor-form-container/mentor-form-container.component';
import { MentorListPresentationComponent } from './mentor-list-container/mentor-list-presentation/mentor-list-presentation.component';
import { MentorListPresenterComponent } from './mentor-list-container/mentor-list-presenter/mentor-list-presenter.component';
import { MentorFormPresentationComponent } from './mentor-form-container/mentor-form-presentation/mentor-form-presentation.component';
import { MentorFormPresenterComponent } from './mentor-form-container/mentor-form-presenter/mentor-form-presenter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MentorService } from './mentor.service';


@NgModule({
  declarations: [
    MentorComponent,
    MentorListContainerComponent,
    MentorFormContainerComponent,
    MentorListPresentationComponent,
    MentorListPresenterComponent,
    MentorFormPresentationComponent,
    MentorFormPresenterComponent
  ],
  imports: [
    CommonModule,
    MentorRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    MentorService
  ]
})
export class MentorModule { }
