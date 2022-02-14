import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddformComponent } from './components/addform/addform.component';
import { ViewformComponent } from './components/viewform/viewform.component';
import { UserformComponent } from './userform.component';

const routes: Routes = [
  { path: '', component: UserformComponent },
  { path: 'userform', component: UserformComponent,
  children:[
    {
      path: 'addform', component: AddformComponent
    },
    {
      path: 'viewform', component: ViewformComponent
    },
    {
      path:'edit/:id', component: AddformComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserformRoutingModule { }
