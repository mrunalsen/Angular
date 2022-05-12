import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedifyComponent } from './medify.component';
import { ProjectPresentationComponent } from './project-presentation/project-presentation.component';

const routes: Routes = [
  { 
    path: '', 
    component: MedifyComponent,
    children:[
      {
        path: 'project',
        component: ProjectPresentationComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedifyRoutingModule { }
