import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BindRoutingModule } from './bind-routing.module';
import { BindComponent } from './bind.component';


@NgModule({
  declarations: [
    BindComponent
  ],
  imports: [
    CommonModule,
    BindRoutingModule
  ]
})
export class BindModule { }
