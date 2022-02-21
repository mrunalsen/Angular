import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserformRoutingModule } from './Assessment2/userform/userform-routing.module';
import { CoreModule } from './core/core.module';
import { DatabindingComponent } from './databinding/databinding.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ResumebuilderModule } from './Modules/resumebuilder/resumebuilder.module';
import { ToUpperCasePipe } from './toUpperCase/to-upper-case.pipe';
import { FilterPipe } from './Assessment2/pipes/filter.pipe';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';




@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    DatabindingComponent,
    ToUpperCasePipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    ResumebuilderModule,
    HttpClientModule,
    UserformRoutingModule,
    HttpClientInMemoryWebApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
