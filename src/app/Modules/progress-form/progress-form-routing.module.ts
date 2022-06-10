import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressFormComponent } from './progress-form.component';

const routes: Routes = [{ path: '', component: ProgressFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgressFormRoutingModule { }
