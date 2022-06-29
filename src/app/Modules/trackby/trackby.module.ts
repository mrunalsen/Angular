import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackbyRoutingModule } from './trackby-routing.module';
import { TrackbyComponent } from './trackby.component';


@NgModule({
  declarations: [
    TrackbyComponent
  ],
  imports: [
    CommonModule,
    TrackbyRoutingModule
  ]
})
export class TrackbyModule { }
