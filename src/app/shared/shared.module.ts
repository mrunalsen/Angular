import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination/pagination.component';
import { FiledropzoneDirective } from './directives/filedropzone.directive';
import { SortDirective } from './directives/sort.directive';
import { SearchPipe } from './pipes/search.pipe';



@NgModule({
  declarations: [
    PaginationComponent,
    FiledropzoneDirective,
    SortDirective,
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    PaginationComponent,
    FiledropzoneDirective
  ]
})
export class SharedModule { }
