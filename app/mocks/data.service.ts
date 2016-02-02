import {Injectable, Inject} from 'angular2/core';
import {Server} from '../../server/wave1server.service';

@Injectable()
export class DataService {
  public _data: Array<Object>;
  constructor(server: Server) {
  }
  
  getData(): Promise<any> {
    return new Promise(res => setTimeout(() => res(this._data), 330));
  }
}