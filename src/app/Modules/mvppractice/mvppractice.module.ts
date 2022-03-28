import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MvppracticeRoutingModule } from './mvppractice-routing.module';
import { MvppracticeComponent } from './mvppractice.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormPresentationComponent } from './form-container/form-presentation/form-presentation.component';
import { ListPresentationComponent } from './list-container/list-presentation/list-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MvppracticeComponent,
    ListContainerComponent,
    FormContainerComponent,
    FormPresentationComponent,
    ListPresentationComponent,
  ],
  imports: [
    CommonModule,
    MvppracticeRoutingModule,
    ReactiveFormsModule
  ]
})
export class MvppracticeModule { }
