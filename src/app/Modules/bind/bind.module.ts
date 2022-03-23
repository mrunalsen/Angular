import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BindRoutingModule } from './bind-routing.module';
import { BindComponent } from './bind.component';
import { BindFormComponent } from './bind-form/bind-form.component';
import { BindListComponent } from './bind-list/bind-list.component';
import { BindService } from './bind.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BindComponent,
    BindFormComponent,
    BindListComponent
  ],
  imports: [
    CommonModule,
    BindRoutingModule,
    SharedModule
  ],
  providers:[
    BindService
  ]
})
export class BindModule { }
