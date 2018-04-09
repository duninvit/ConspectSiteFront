import { Component, OnInit } from '@angular/core';
import {CloudData, CloudOptions} from 'angular-tag-cloud-module';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {ConspectService} from '../../../../shared/services/conspect.service';
import {Tag} from '../../../../shared/models/tag.model';

@Component({
  selector: 'app-tags-cloud',
  templateUrl: './tags-cloud.component.html',
  styleUrls: ['./tags-cloud.component.scss']
})
export class TagsCloudComponent implements OnInit {

  options: CloudOptions = {
    width: 260,
    overflow: true
  };

  data: CloudData[] = [];
  tagsList: Tag[] = [];

  constructor(private conspectService: ConspectService) { }

  ngOnInit() {
    this.getTagsList();
  }

  compare(a: Tag, b: Tag) {
    if (a.weight < b.weight) {
      return 1;
    }
    if (a.weight > b.weight) {
      return -1;
    }
    return 0;
  }

  getTagsList() {
    this.conspectService.getTagsList()
      .subscribe(data => {
        const tags = JSON.parse(data);
        const newTags = [];
        for (let i = 0; i < tags.length; i++) {
            const cloudData = {text: tags[i].tag, weight: tags[i].weight, link: '/tag/' + tags[i].tag};
              newTags.push(cloudData);
        }
        this.data = newTags;
      });
  }

}
