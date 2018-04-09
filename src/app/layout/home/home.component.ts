import { Component, OnInit } from '@angular/core';
import {Conspect} from '../../shared/models/conspect.model';
import {User} from '../../shared/models/user.model';
import {ConspectService} from '../../shared/services/conspect.service';
import {Router} from '@angular/router';
import {TokenStorage} from '../../shared/services/auth/token.storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  conspects: Conspect[];

  constructor(private conspectService: ConspectService, private router: Router, private storage: TokenStorage) {
  }

  ngOnInit() {
    this.conspectService.freshConspects()
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
