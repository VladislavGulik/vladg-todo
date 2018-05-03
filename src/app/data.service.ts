import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  tasks: any;

  constructor(private _http: Http) { }

  getTasks() {
    return this._http.get('/tasks').map(tasks => this.tasks = tasks.json().data);
  }

}
