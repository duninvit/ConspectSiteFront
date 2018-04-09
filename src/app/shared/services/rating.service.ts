import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RatingService {

  constructor(private http: HttpClient) { }

  getRating(conspectId): Observable<any> {
    return this.http.get('http://localhost:8080/rate/get?conspectId=' + conspectId)
      .map(data => JSON.stringify(data));
  }

  setRating(conspectId, rating) {
    return this.http.post('http://localhost:8080/rate/add?conspectId=' + conspectId, rating);
  }
}
