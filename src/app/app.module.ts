import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DatabindingComponent } from './databinding/databinding.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ToUpperCasePipe } from './toUpperCase/to-upper-case.pipe';
import { ListComponent } from './users/list/list.component';


const appRoutes: Routes = [
  {path:'form', component: ReactiveFormComponent},
  {path:'list', component: ListComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    DatabindingComponent,
    ToUpperCasePipe,
    ReactiveFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
