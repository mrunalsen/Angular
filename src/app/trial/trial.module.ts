import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrialRoutingModule } from './trial-routing.module';
import { TrialComponent } from './trial.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    TrialComponent,
    HelloComponent,
  ],
  imports: [
    CommonModule,
    TrialRoutingModule
  ]
})
export class TrialModule {
}
