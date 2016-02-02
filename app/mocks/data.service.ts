import {Injectable, Inject} from 'angular2/core';
import {Server} from '../../server/';

@Injectable()
export class DataService {
  public _data: Array<Object>;
  public _server: Server = new Server();
  constructor() {
  }
  
  getData(): Promise<any> {
    return new Promise(res => setTimeout(() => res(this._data), 330));
  }
}