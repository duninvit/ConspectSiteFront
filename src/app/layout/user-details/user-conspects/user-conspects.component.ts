import { Component, OnInit } from '@angular/core';
import {Conspect} from '../../../shared/models/conspect.model';
import {ConspectService} from '../../../shared/services/conspect.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-conspects',
  templateUrl: './user-conspects.component.html',
  styleUrls: ['./user-conspects.component.scss']
})
export class UserConspectsComponent implements OnInit {

  conspects: Conspect[];

  constructor(private conspectService: ConspectService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.conspectService.getConspects(this.route.snapshot.params['id'].toString())
      .subscribe( data => {
        this.conspects = data;
      });
  }

  onClick(tag: string) {
    this.router.navigate(['/tag/', tag]);
  }

}
