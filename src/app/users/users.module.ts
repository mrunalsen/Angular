import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsComponent } from './forms/forms.component';
import { ListComponent } from './list/list.component';
import { ServicesService } from './services/services.service';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormModalComponent } from './form-modal/form-modal.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    UsersComponent,
    FormsComponent,
    ListComponent,
    SearchPipe,
    FormModalComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
ServicesService
  ],
 
})
export class UsersModule { }
