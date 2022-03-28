import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MvppracticeComponent } from './mvppractice.component';

const routes: Routes = [{ path: '', component: MvppracticeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MvppracticeRoutingModule { }
