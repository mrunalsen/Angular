import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsComponent } from './forms/forms.component';
import { ListComponent } from './list/list.component';
import { ServicesService } from './services/services.service';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormModalComponent } from './form-modal/form-modal.component';
import { SharedModule } from '../shared/shared.module';




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
    SharedModule,
    HttpClientModule
  ],
  providers:[
ServicesService
  ],
 
})
export class UsersModule { }
