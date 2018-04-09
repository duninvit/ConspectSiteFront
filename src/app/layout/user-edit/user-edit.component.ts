import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/models/user.model';
import {UserService} from '../../shared/services/user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user: User = new User();
  username: string;

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getMe()
      .subscribe(data => {
        this.user = JSON.parse(data);
      });
  }

  submit() {
    this.userService.updateMyProfile(this.user)
      .subscribe();
  }

  cancel() {
    this.router.navigate(['/user/', this.user.id]);
  }

}
