import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {AuthService} from '../shared/services/auth/auth.service';
import {TokenStorage} from '../shared/services/auth/token.storage';
import {Profile} from '../shared/models/profile.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  username: string;
  email: string;
  password: string;

  constructor(public router: Router, private authService: AuthService, private token: TokenStorage) {}

  ngOnInit() {}

  login() {
    const user: Profile = {
      email: '',
      username: this.username,
      password: this.password,
    };
    this.authService.login(user)
      .subscribe(data => {
          this.token.saveToken(data);
          this.router.navigate(['']);
        }
      );
  }
}
