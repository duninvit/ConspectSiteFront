import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Conspect} from '../models/conspect.model';

@Injectable()
export class ConspectService {

  constructor(private http: HttpClient) { }

  public freshConspects(): Observable<any> {
    return this.http.get('http://localhost:8080/conspects/fresh');
  }

  public getConspects(id): Observable<any> {
    return this.http.get('http://localhost:8080/conspects/gets?id=' + id);
  }

  public getConspectsByTag(tag): Observable<any> {
    return this.http.get('http://localhost:8080/conspects/getbytag?tag=' + tag);
  }

  public getConspect(id): Observable<any> {
    return this.http.get('http://localhost:8080/conspects/get/' + id);
  }

  public createConspect(conspect: Conspect) {
    return this.http.post('http://localhost:8080/conspects/create', conspect)
      .map(data => JSON.stringify(data));
  }

  getTagsList() {
    return this.http.get('http://localhost:8080/conspects/tags')
      .map(data => JSON.stringify(data));
  }
}
