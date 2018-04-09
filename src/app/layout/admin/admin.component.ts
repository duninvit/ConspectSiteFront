import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/models/user.model';
import {UserService} from '../../shared/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  userList: Array<User>;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(data => {
        this.userList = JSON.parse(data);
        console.log(this.userList);
      });
  }

  setAdmin(user) {
    user.role = 'ROLE_ADMIN';
    this.userService.updateUserProfile(user)
      .subscribe();
  }

  block(user) {
    user.blocked = true;
    this.userService.updateUserProfile(user)
      .subscribe();
  }

  delete(user) {
    this.userService.deleteUserProfile(user)
      .subscribe(
        this.router.navigate['/admin']
      );
  }

}
