import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FilesService } from './files.service';


@NgModule({
  declarations: [
    FileUploadComponent,
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers : [
    FilesService
  ]
})
export class FileUploadModule { }
