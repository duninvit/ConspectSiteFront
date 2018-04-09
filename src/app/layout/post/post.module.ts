import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageHeaderModule} from '../../shared';
import {PostRoutingModule} from './post-routing.module';
import {PostComponent} from './post.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {CovalentTextEditorModule} from '@covalent/text-editor';

@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule,
    PageHeaderModule,
    NgbModule,
    FormsModule,
    CovalentTextEditorModule
  ],
  declarations: [PostComponent]
})
export class PostModule { }
