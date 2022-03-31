import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { FileUploadContainerComponent } from './file-upload-container/file-upload-container.component';
import { FileListContainerComponent } from './file-list-container/file-list-container.component';
import { FileListPresentationComponent } from './file-list-container/file-list-presentation/file-list-presentation.component';
import { FileUploadPresentationComponent } from './file-upload-container/file-upload-presentation/file-upload-presentation.component';


@NgModule({
  declarations: [
    FileUploadComponent,
    FileUploadContainerComponent,
    FileListContainerComponent,
    FileListPresentationComponent,
    FileUploadPresentationComponent
  ],
  imports: [
    CommonModule,
    FileUploadRoutingModule
  ]
})
export class FileUploadModule { }
