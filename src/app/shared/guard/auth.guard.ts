import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import {AuthService} from '../services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(public auth: AuthService, private router: Router) {}

    canActivate() {
      if (!this.auth.isAuthenticated()) {
        this.router.navigate(['']);
        return false;
      }
      return true;
    }
}
