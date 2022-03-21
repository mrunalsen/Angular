import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BindRoutingModule } from './bind-routing.module';
import { BindComponent } from './bind.component';
import { BindFormComponent } from './bind-form/bind-form.component';
import { BindListComponent } from './bind-list/bind-list.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BindComponent,
    BindFormComponent,
    BindListComponent
  ],
  imports: [
    CommonModule,
    BindRoutingModule,
    ReactiveFormsModule
  ],
})
export class BindModule { }
