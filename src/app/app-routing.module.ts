import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './users/forms/forms.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'medify', pathMatch:'full'
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {path:'forms', component: FormsComponent},

  { path: 'resume', loadChildren: () => import('./Modules/resumebuilder/resumebuilder.module').then(m => m.ResumebuilderModule) },

  { path: 'userform', loadChildren: () => import('./Assessment2/userform/userform.module').then(m => m.UserformModule) },

  { path: 'trial', loadChildren: () => import('./trial/trial.module').then(m => m.TrialModule) },

  { path: 'todo', loadChildren: () => import('./Modules/todo/todo.module').then(m => m.TodoModule) },
  
  { path: 'mentor', loadChildren: () => import('./Modules/mentor/mentor.module').then(m => m.MentorModule) },
  
  { path: 'bind', loadChildren: () => import('./Modules/bind/bind.module').then(m => m.BindModule) },
  
  { path: 'login', loadChildren: () => import('./Modules/login/login.module').then(m => m.LoginModule) },

  { path: 'mvp', loadChildren: () => import('./Modules/mvp-demo/mvp-demo.module').then(m => m.MvpDemoModule) },

  { path: 'mvppractice', loadChildren: () => import('./Modules/mvppractice/mvppractice.module').then(m => m.MvppracticeModule) },
  
  { path: 'file-upload', loadChildren: () => import('./Modules/file-upload/file-upload.module').then(m => m.FileUploadModule) },

  { path: 'medify', loadChildren: () => import('./Modules/medify/medify.module').then(m => m.MedifyModule) },
  
  { path: 'bar', loadChildren: () => import('./Modules/bar/bar.module').then(m => m.BarModule) },
  
  { path: 'progress', loadChildren: () => import('./Modules/progress-bar/progress-bar.module').then(m => m.ProgressBarModule) },

  { path: 'print', loadChildren: () => import('./Modules/print/print.module').then(m => m.PrintModule) },

  { path: 'projection', loadChildren: () => import('./Modules/projection/projection.module').then(m => m.ProjectionModule) },
  
  { path: 'trackby', loadChildren: () => import('./Modules/trackby/trackby.module').then(m => m.TrackbyModule) },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
