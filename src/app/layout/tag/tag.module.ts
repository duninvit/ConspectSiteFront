import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageHeaderModule} from '../../shared';
import {TagRoutingModule} from './tag-routing.module';
import {TagComponent} from './tag.component';

@NgModule({
  imports: [
    CommonModule, TagRoutingModule, PageHeaderModule
  ],
  declarations: [TagComponent]
})
export class TagModule { }
