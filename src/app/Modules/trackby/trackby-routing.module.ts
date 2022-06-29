import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackbyComponent } from './trackby.component';

const routes: Routes = [{ path: '', component: TrackbyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackbyRoutingModule { }
