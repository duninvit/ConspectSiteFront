import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';

const TOKEN_KEY = 'access_token';
const TOKEN_EXP = 'expires_at';

@Injectable()
export class TokenStorage {

  constructor(private jwtHelp: JwtHelper) { }

  signOut() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_EXP);
    localStorage.clear();
  }

  public saveToken(token: string) {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TOKEN_EXP);
    localStorage.setItem(TOKEN_KEY,  token);
    const decoded = this.jwtHelp.decodeToken(token);
    console.log('SaveToken' + decoded);
    localStorage.setItem(TOKEN_EXP, decoded.expires_at);
  }

  public getId(): string {
    const decoded = this.jwtHelp.decodeToken(localStorage.getItem(TOKEN_KEY));
    return decoded.user_id;
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }
}
