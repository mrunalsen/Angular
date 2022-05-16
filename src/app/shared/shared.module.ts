import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { FiledropzoneDirective } from './directives/filedropzone.directive';
import { SortDirective } from './directives/sort.directive';
import { SearchPipe } from './pipes/search.pipe';
import { AutofocusDirective } from './directives/autofocus.directive';
import { PhonemaskDirective } from './directives/phonemask.directive';


@NgModule({
  declarations: [
    PaginationComponent,
    FiledropzoneDirective,
    SortDirective,
    SearchPipe,
    AutofocusDirective,
    PhonemaskDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    PaginationComponent,
    FiledropzoneDirective,
    AutofocusDirective,
    PhonemaskDirective
  ]
})
export class SharedModule { }
