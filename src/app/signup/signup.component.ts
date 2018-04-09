import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {AuthService} from '../shared/services/auth/auth.service';
import {Router} from '@angular/router';
import {TokenStorage} from '../shared/services/auth/token.storage';
import {UniqueReg} from '../shared/models/unique-reg.model';
import {Profile} from '../shared/models/profile.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
  username: string;
  email: string;
  password: string;
  unicueReg: UniqueReg = new UniqueReg();

  placeholderUsername = 'Username';
  placeholderEmail = 'Email';

  constructor(public router: Router, private authService: AuthService, private token: TokenStorage) {}

  ngOnInit() {}

  register(): void {
    const user: Profile = {
      email: '',
      username: this.username,
      password: this.password,
    };
    this.authService.register(user).subscribe(
      data => {
        this.unicueReg = data;
        if (this.unicueReg.credentialsUnique) { this.router.navigate(['']); }
        if (!this.unicueReg.emailUnique) { this.placeholderEmail = 'Email already exists'; this.email = null; }
        if (!this.unicueReg.usernameUnique) { this.placeholderUsername = 'Username already exists'; this.username = null; }
      }
    );
  }
  /*login(): void {
    console.log(this.username, this.email, this.password);
    this.authService.login(this.username, this.email, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.router.navigate(['']);
      }
    );
  }*/
}
