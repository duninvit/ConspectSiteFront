import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {NgbDropdownModule, NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {ConspectService} from '../shared/services/conspect.service';
import { NewPostComponent } from './new-post/new-post.component';
import {UserService} from '../shared/services/user.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import {TagsCloudComponent} from './components/sidebar/tags-cloud/tags-cloud.component';
import {TagCloudModule} from 'angular-tag-cloud-module';
import { AdminComponent } from './admin/admin.component';
import {RatingService} from '../shared/services/rating.service';
import { CovalentTextEditorModule } from '@covalent/text-editor';
import { UserConspectsComponent } from './user-details/user-conspects/user-conspects.component';
import { TagComponent } from './tag/tag.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        TagCloudModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, TagsCloudComponent],
    providers: [ConspectService, UserService, RatingService, NgbRatingConfig]
})
export class LayoutModule {}
