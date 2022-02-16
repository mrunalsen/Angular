import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumebuilderComponent } from './resumebuilder.component';
import { ResumeeditorComponent } from './resumeeditor/resumeeditor.component';
import { ResumeviewerComponent } from './resumeviewer/resumeviewer.component';

const routes: Routes = [
  { path: '',
    children: [
      // {path: '', redirectTo:'viewer',pathMatch:'full'},
    {path: 'editor', component: ResumeeditorComponent},
     { path: 'viewer', component: ResumeviewerComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumebuilderRoutingModule { }
