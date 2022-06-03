import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarPresenterComponent } from './bar-presenter/bar-presenter.component';
import { BarComponent } from './bar.component';

const routes: Routes = [{ path: '', component: BarPresenterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarRoutingModule { }
