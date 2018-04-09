import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserDetailsRoutingModule} from './user-details-routing.module';
import {UserDetailsComponent} from './user-details.component';
import {UserConspectsComponent} from './user-conspects/user-conspects.component';

@NgModule({
  imports: [
    CommonModule, UserDetailsRoutingModule
  ],
  declarations: [UserDetailsComponent, UserConspectsComponent]
})
export class UserDetailsModule { }
