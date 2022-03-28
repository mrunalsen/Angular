import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
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
import { TrialModule } from './trial/trial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeletePopupComponent } from './shared/delete-popup/delete-popup.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { BindService } from './Modules/bind/bind.service';
import { SharedModule } from './shared/shared.module';
import { LoggingInterceptor } from './shared/interceptors/logging.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    DatabindingComponent,
    ToUpperCasePipe,
    FilterPipe,
    DeletePopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ResumebuilderModule,
    HttpClientModule,
    UserformRoutingModule,
    HttpClientInMemoryWebApiModule,
    TrialModule,
    BrowserAnimationsModule,
    OverlayModule
  ],
  providers: [
    BindService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
