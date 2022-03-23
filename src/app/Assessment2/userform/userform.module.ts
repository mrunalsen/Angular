import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserformRoutingModule } from './userform-routing.module';
import { UserformComponent } from './userform.component';
import { ViewformComponent } from './components/viewform/viewform.component';
import { AddformComponent } from './components/addform/addform.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    UserformComponent,
    ViewformComponent,
    AddformComponent
  ],
  imports: [
    CommonModule,
    UserformRoutingModule,
    SharedModule
  ]
})
export class UserformModule { }
