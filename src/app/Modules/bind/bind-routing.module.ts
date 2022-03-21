import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindComponent } from './bind.component';

const routes: Routes = [{ path: '', component: BindComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule]
})
export class BindRoutingModule { }
