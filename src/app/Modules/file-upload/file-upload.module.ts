import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FileListPresentationComponent } from './file-list-presentation/file-list-presentation.component';
import { FileUploadPresentationComponent } from './file-upload-presentation/file-upload-presentation.component';
import { FileUploadService } from './file-upload.service';


@NgModule({
  declarations: [
    FileUploadComponent,
    FileListPresentationComponent,
    FileUploadPresentationComponent,
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers : [
 FileUploadService  ]
})
export class FileUploadModule { }
