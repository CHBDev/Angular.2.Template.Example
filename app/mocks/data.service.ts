import {Injectable, Inject} from 'angular2/core';
import {Server} from './wave1server.service';

@Injectable()
export class DataService {
  public _data: Array<Object>;
  public _server: Server;
  constructor() {
    this._server = new Server();
  }
  
  getData(): Promise<any> {
    return new Promise(res => setTimeout(() => res(this._data), 330));
  }
}