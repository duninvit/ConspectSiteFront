import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/models/user.model';
import {UserService} from '../../shared/services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorage} from '../../shared/services/auth/token.storage';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User = new User();
  username: string;

  constructor(public userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private storage: TokenStorage) { }

  ngOnInit() {
    this.userService.getUser(this.route.snapshot.params['id'])
      .subscribe(data => {
        this.user = JSON.parse(data);
      });
  }

  edit() {
    this.router.navigate(['/user-edit']);
  }

  isCurrentUser(): boolean {
    if (this.route.snapshot.params['id'].toString() === this.storage.getId().toString()) {
      return true;
    }
    return false;
  }
}
