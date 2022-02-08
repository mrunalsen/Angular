import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { ListComponent } from './list/list.component';
import { ServicesService } from './services/services.service';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SearchPipe } from './pipes/search.pipe';




@NgModule({
  declarations: [
    UsersComponent,
    FormsComponent,
    ListComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
ServicesService
  ],
 
})
export class UsersModule { }
