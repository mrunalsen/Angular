import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { ListComponent } from './list/list.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    children: [
      {
        path: '', redirectTo: 'user-form'
      },
      {
        path: 'user-form', component: FormsComponent
      },
      {
        path: 'user-list', component: ListComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,]
})
export class UsersRoutingModule { }
export const routingComponents = [FormsComponent]