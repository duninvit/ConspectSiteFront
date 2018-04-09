import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditRoutingModule} from './user-edit-routing.module';
import { UserEditComponent} from './user-edit.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, UserEditRoutingModule, FormsModule
  ],
  declarations: [UserEditComponent]
})
export class UserEditModule { }
