import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DatabindingComponent } from './databinding/databinding.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ResumebuilderModule } from './Modules/resumebuilder/resumebuilder.module';

import { ToUpperCasePipe } from './toUpperCase/to-upper-case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    DatabindingComponent,
    ToUpperCasePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    ResumebuilderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
