import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarRoutingModule } from './bar-routing.module';
import { BarComponent } from './bar.component';
import { BarPresenterComponent } from './bar-presenter/bar-presenter.component';


@NgModule({
  declarations: [
    BarComponent,
    BarPresenterComponent
  ],
  imports: [
    CommonModule,
    BarRoutingModule
  ]
})
export class BarModule { }
