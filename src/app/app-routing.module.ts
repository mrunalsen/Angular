import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsComponent } from './users/forms/forms.component';


const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {path:'forms', component: FormsComponent},
  { path: 'resume', loadChildren: () => import('./Modules/resumebuilder/resumebuilder.module').then(m => m.ResumebuilderModule) },
  { path: 'userform', loadChildren: () => import('./Assessment2/userform/userform.module').then(m => m.UserformModule) },
  

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
