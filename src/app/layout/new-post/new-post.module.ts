import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageHeaderModule} from '../../shared';
import {NewPostRoutingModule} from './new-post-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {NewPostComponent} from './new-post.component';
import {CovalentTextEditorModule} from '@covalent/text-editor';
import {FileDropModule} from 'ngx-file-drop';
import {FileUploadModule} from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    NewPostRoutingModule,
    PageHeaderModule,
    NgbModule,
    FormsModule,
    FileDropModule,
    CovalentTextEditorModule,
    FileUploadModule,
  ],
  declarations: [NewPostComponent]
})
export class NewPostModule {}
