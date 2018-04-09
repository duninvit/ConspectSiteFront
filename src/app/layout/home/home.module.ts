import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageHeaderModule} from '../../shared';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule({
  imports: [
    CommonModule, HomeRoutingModule, PageHeaderModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
