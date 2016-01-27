import {Injectable, Inject} from 'angular2/core';

@Injectable()
export class DataService {
  public _data: Array<Object>;
  constructor() {
  }
  
  getData() {
    return new Promise(res => setTimeout(() => res(this._data), 330));
  }
}