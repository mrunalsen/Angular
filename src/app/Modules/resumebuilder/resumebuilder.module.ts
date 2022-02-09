import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumebuilderRoutingModule } from './resumebuilder-routing.module';
import { ResumebuilderComponent } from './resumebuilder.component';
import { ResumeviewerComponent } from './resumeviewer/resumeviewer.component';
import { ResumeeditorComponent } from './resumeeditor/resumeeditor.component';
import { Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'resume', component: ResumebuilderComponent,
    
  },
];
@NgModule({
  declarations: [
    ResumebuilderComponent,
    ResumeviewerComponent,
    ResumeeditorComponent
  ],
  imports: [
    CommonModule,
    ResumebuilderRoutingModule,
    ReactiveFormsModule
  ]
})
export class ResumebuilderModule { }
export class routingComponents {} [ResumebuilderComponent]