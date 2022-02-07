import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DatabindingComponent } from './databinding/databinding.component';
import { HighlightDirective } from './directives/highlight.directive';

import { ToUpperCasePipe } from './toUpperCase/to-upper-case.pipe';

const appRoutes: Routes=[
]

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
