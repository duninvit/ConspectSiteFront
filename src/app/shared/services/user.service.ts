import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {RequestOptions} from '@angular/http';
import {User} from '../models/user.model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  public getMe() {
    return this.http.get('http://localhost:8080/users/me')
      .map(data => JSON.stringify(data));
  }

  public getUser(id): Observable<any> {
    return this.http.get('http://localhost:8080/users/user?id=' + id)
      .map(data => JSON.stringify(data));
  }

  public updateMyProfile(user: User) {
    return this.http.post('http://localhost:8080/users/me/update', user)
      .map(data => JSON.stringify(data));
  }

  public updateUserProfile(user: User) {
    return this.http.post('http://localhost:8080/users/update', user)
      .map(data => JSON.stringify(data));
  }

  public deleteUserProfile(user: User) {
    return this.http.post('http://localhost:8080/users/delete', user)
      .map(data => JSON.stringify(data));
  }

  public getUsers() {
    return this.http.get('http://localhost:8080/users/all')
      .map(data => JSON.stringify(data));
  }
}
