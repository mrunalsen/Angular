import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';



@NgModule({
  declarations: [
    UsersComponent,
    FormsComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
  ],
  
  exports:[UsersComponent]
})
export class UsersModule { }
