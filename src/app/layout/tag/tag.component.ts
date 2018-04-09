import { Component, OnInit } from '@angular/core';
import {TokenStorage} from '../../shared/services/auth/token.storage';
import {Conspect} from '../../shared/models/conspect.model';
import {ConspectService} from '../../shared/services/conspect.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  conspects: Conspect[];

  constructor(private conspectService: ConspectService,
              private router: Router,
              private storage: TokenStorage,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.conspectService.getConspectsByTag(this.route.snapshot.params['tag'].toString())
      .subscribe( data => {
        this.conspects = data;
      });
  }

  onClick(tag: string) {
    this.router.navigate(['/tag/', tag]);
  }

  currentUser(): any {
    return this.storage.getId().toString();
  }

}
